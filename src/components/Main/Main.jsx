import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import bodyStyles from './bodyStyles.css';

import Request from './Request';
import Utility from '../Utility';
import * as actions from '../../redux/actions';
import * as genres from './genres.json';
import { apiResultsNum } from '../../constants';

import Card from './Card';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.request = new Request();
  }

  componentDidMount() {
    this.makePayload();
  }

  componentDidUpdate(prevProps) {
    const { updateCounter } = this.props;
    if (prevProps.updateCounter !== updateCounter) {
      this.makePayload();
    }
  }

  async makePayload() {
    const {
      readYear,
      readRating,
      readGenre,
      readTotalResults,
      main,
      addResults,
      UIpage,
    } = this.props;

    const layout = Utility.calculateLayout(UIpage, main, apiResultsNum, readTotalResults);

    if (layout.page) {
      const data = await this.request.getMovies(
        layout.page,
        Number(readYear),
        Number(readRating),
        Utility.codeGenre(readGenre, genres.default),
      );
      const cardPayload = data.results.slice(
        data.results.length * layout.startPoint,
        data.results.length * layout.endPoint,
      );
      this.setState({
        isLoaded: true,
        items: cardPayload,
      });
      addResults(data.total_results);
    } else {
      const page1 = await this.request.getMovies(
        layout.startPage,
        Number(readYear),
        Number(readRating),
        Utility.codeGenre(readGenre, genres.default),
      );

      const page2 = await this.request.getMovies(
        layout.endPage,
        Number(readYear),
        Number(readRating),
        Utility.codeGenre(readGenre, genres.default),
      );
      const payload1 = page1.results.slice(
        page1.results.length * layout.startPoint,
        page1.results.length,
      );
      const payload2 = page2.results.slice(
        0,
        page2.results.length * layout.endPoint,
      );

      const finalPayload = payload1.concat(payload2);
      this.setState({
        isLoaded: true,
        items: finalPayload,
      });
    }
  }

  render() {
    const { isLoaded, items } = this.state;
    if (isLoaded) {
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
      <h1>
        MAIN
      </h1>
    );
  }
}

const mapStateToProps = (state) => (
  {
    readYear: state.year,
    readRating: state.rating,
    readGenre: state.genre,
    readTotalResults: state.totalResults,
    updateCounter: state.updateCounter,
    main: state.main,
    UIpage: state.UIpage,
  }
);

const mapDispatchToProps = (dispatch) => {
  const { addResults } = bindActionCreators(actions, dispatch);
  return {
    addResults: (payload) => addResults(payload),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);

Main.propTypes = {
  readYear: PropTypes.string,
  readRating: PropTypes.string,
  readGenre: PropTypes.string,
  readTotalResults: PropTypes.number,
  updateCounter: PropTypes.number,
  main: PropTypes.number,
  addResults: PropTypes.func,
  UIpage: PropTypes.number,
};

Main.defaultProps = {
  readYear: '',
  readRating: '',
  readGenre: '',
  readTotalResults: 0,
  updateCounter: 0,
  main: 0,
  UIpage: 0,
  addResults: () => { },
};
