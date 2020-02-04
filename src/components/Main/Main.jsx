import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import mainStyles from './Main.css';

import { sections, apiResultsPerPage } from '../../constants';
import { codeGenre, calculateRequestProps } from '../Utils';
import Request from './Request';
import makePayload from './makePayload';
import * as actions from '../../redux/actions';

import Card from '../Card';
import Details from '../Details';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      details: {},
      isDetails: false,
    };
    this.request = new Request();
  }

  async componentDidMount() {
    const { addAllGenres, addResults, UIpage } = this.props;
    const genres = await this.request.getGenres();
    addAllGenres(genres.genres);

    const { requestProps, cardsNum, allGenres } = this.props;
    const payload = await makePayload(
      'getMovies',
      [
        requestProps.year,
        requestProps.rating,
        codeGenre(requestProps.genre, allGenres),
      ],
      cardsNum.main,
      UIpage,
    );
    addResults(payload.totalResults);
    this.updateState('items', payload.items);
  }

  async componentDidUpdate(prevProps) {
    const {
      redux,
      updateCounter,
      detailsId,
      requestProps,
      cardsNum,
      currentSection,
      UIpage,
      addResults,
      allGenres,
      favoriteMovies,
      query,
    } = this.props;

    if (prevProps.updateCounter !== updateCounter) {
      switch (currentSection) {
        case sections.main:
          const mainPayload = await makePayload(
            'getMovies',
            [
              requestProps.year,
              requestProps.rating,
              codeGenre(requestProps.genre, allGenres),
            ], cardsNum.main,
            UIpage,
          );
          addResults(mainPayload.totalResults);
          this.updateState('items', mainPayload.items);
          break;

        case sections.popular:
          const popularPayload = await makePayload('getPopular', [], cardsNum.popular, UIpage);
          addResults(popularPayload.totalResults);
          this.updateState('items', popularPayload.items);
          break;

        case sections.search:
          const searchPayload = await makePayload('findMovie', [query], cardsNum.search, UIpage);
          addResults(searchPayload.totalResults);
          this.updateState('items', searchPayload.items);
          console.log(redux);
          break;

        case sections.favorite:
          addResults(favoriteMovies.length);
          const layout = calculateRequestProps(UIpage, cardsNum.favorite, apiResultsPerPage);

          const favoritePayload = favoriteMovies.slice(
            layout.startRes,
            layout.startRes + cardsNum.favorite,
          );
          this.updateState('items', favoritePayload);
          break;

        default:
          return;
      }
    }

    if (prevProps.detailsId !== detailsId) {
      const details = await this.request.getDetails(detailsId);
      this.updateState('details', details);
      this.updateState('isDetails', true);
    }
  }


  toggleDetails = () => {
    const { isDetails, details } = this.state;
    if (details.id) {
      this.updateState('isDetails', !isDetails);
    }
  }

  updateState = (stateName, items) => {
    this.setState({
      [stateName]: items,
    });
  }

  render() {
    const { isDetails, items, details } = this.state;
    if (isDetails) {
      return (
        <Details item={details} exitDetails={this.toggleDetails} />
      );
    }
    return (
      <div className={mainStyles.pageBody}>
        {items.map((item) => {
          return (
            <Card key={item.id} item={item} stepInDetails={this.toggleDetails} />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    redux: state,
    currentSection: state.section,
    cardsNum: {
      main: state.main,
      popular: state.popular,
      favorite: state.favorite,
      search: state.search,
    },
    allGenres: state.allGenres,
    UIpage: state.UIpage,
    query: state.query,
    requestProps: {
      year: state.year,
      rating: state.rating,
      genre: state.genre,
    },
    favoriteMovies: state.favoriteMovies,
    detailsId: state.detailsId,
    updateCounter: state.updateCounter,
  }
);

const mapDispatchToProps = (dispatch) => {
  const { addResults, addAllGenres } = bindActionCreators(actions, dispatch);
  return {
    addResults: (payload) => addResults(payload),
    addAllGenres: (payload) => addAllGenres(payload),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);

Main.propTypes = {
  currentSection: PropTypes.string,
  query: PropTypes.string,
  updateCounter: PropTypes.number,
  cardsNum: PropTypes.object,
  UIpage: PropTypes.number,
  allGenres: PropTypes.array,
  favoriteMovies: PropTypes.array,
  detailsId: PropTypes.number,
  requestProps: PropTypes.object,
  addAllGenres: PropTypes.func,
  addResults: PropTypes.func,
  redux: PropTypes.object,
};

Main.defaultProps = {
  updateCounter: 0,
  query: '',
  cardsNum: {},
  detailsId: 0,
  UIpage: 0,
  requestProps: {},
  redux: {},
  allGenres: [],
  favoriteMovies: [],
  currentSection: 'main',
  addResults: () => { },
  addAllGenres: () => { },
};
