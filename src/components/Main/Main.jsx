import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import bodyStyles from './main.css';

import Request from './Request';
import Utility from '../Utility';
import * as actions from '../../redux/actions';
import { apiResultsPerPage } from '../../constants';

import Card from './Card';
import Details from '../Details';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isDetails: false,
    };
    this.request = new Request();
  }

  componentDidMount() {
    const { addAllGenres } = this.props;
    this.request.getGenres()
      .then((res) => {
        addAllGenres(res.genres);
        this.makePayload();
      });
  }

  componentDidUpdate(prevProps) {
    const { updateCounter, detailsId } = this.props;
    if (prevProps.updateCounter !== updateCounter) {
      this.makePayload();
    }
    if (prevProps.detailsId !== detailsId) {
      this.showDetails(detailsId);
    }
  }

  async showDetails(id) {
    const { isDetails } = this.state;
    const details = await this.request.getDetails(id);
    console.log(details);
    this.setState({
      isDetails: !isDetails,
      details,
    });
  }

  async makePayload() {
    const {
      readYear,
      readRating,
      readGenre,
      allGenres,
      main,
      addResults,
      UIpage,
    } = this.props;

    const layout = Utility.calculateLayout(UIpage, main, apiResultsPerPage);
    if (layout.startPage === layout.endPage) {
      const data = await this.request.getMovies(
        layout.startPage,
        Number(readYear),
        Number(readRating),
        Utility.codeGenre(readGenre, allGenres),
      );
      const cardPayload = data.results.slice(
        layout.startRes,
        layout.endRes,
      );
      this.setState({
        isDetails: false,
        items: cardPayload,
      });
      addResults(data.total_results);
    } else {
      const page1 = await this.request.getMovies(
        layout.startPage,
        Number(readYear),
        Number(readRating),
        Utility.codeGenre(readGenre, allGenres),
      );

      const page2 = await this.request.getMovies(
        layout.endPage,
        Number(readYear),
        Number(readRating),
        Utility.codeGenre(readGenre, allGenres),
      );
      const payload1 = page1.results.slice(
        layout.startRes,
        page1.results.length,
      );
      const payload2 = page2.results.slice(
        0,
        layout.endRes,
      );

      const finalPayload = payload1.concat(payload2);
      this.setState({
        isDetails: false,
        items: finalPayload,
      });
    }
  }

  render() {
    const { isDetails, items, details } = this.state;
    if (!isDetails) {
      return (
        <div className={bodyStyles.pageBody}>
          {items.map((item) => {
            return (
              <Card key={item.id} item={item} />
            );
          })}
        </div>
      );
    }
    return (
      <Details item={details} />
    );
  }
}

const mapStateToProps = (state) => (
  {
    readYear: state.year,
    readRating: state.rating,
    readGenre: state.genre,
    allGenres: state.allGenres,
    readTotalResults: state.totalResults,
    detailsId: state.detailsId,
    updateCounter: state.updateCounter,
    main: state.main,
    UIpage: state.UIpage,
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
  readYear: PropTypes.string,
  readRating: PropTypes.string,
  readGenre: PropTypes.string,
  updateCounter: PropTypes.number,
  main: PropTypes.number,
  detailsId: PropTypes.number,
  addAllGenres: PropTypes.func,
  addResults: PropTypes.func,
  UIpage: PropTypes.number,
  allGenres: PropTypes.array,
};

Main.defaultProps = {
  readYear: '',
  readRating: '',
  readGenre: '',
  updateCounter: 0,
  detailsId: 0,
  main: 0,
  UIpage: 0,
  allGenres: [],
  addResults: () => { },
  addAllGenres: () => { },
};
