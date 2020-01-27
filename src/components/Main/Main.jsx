import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import bodyStyles from './bodyStyles.css';

import Request from '../Request';
import * as genres from './genres.json';

import Card from './Card';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.request = new Request();
  }

  componentDidMount() {
    // const {
    //   readYear,
    //   readRating,
    //   readGenre,
    // } = this.props;
    // this.request.getMovies(
    //   1,
    //   readYear,
    //   Number(readRating),
    //   genres.default.find((genre) => genre.name === readGenre).id,
    // ).then((data) => {
    //   this.setState({
    //     isLoaded: true,
    //     items: data.results,
    //   });
    // });
  }

  componentDidUpdate(prevProps) {
    const {
      readYear,
      readRating,
      readGenre,
      updateCounter,
    } = this.props;

    if (prevProps.updateCounter !== updateCounter) {
      this.request.getMovies(
        1,
        readYear,
        Number(readRating),
        genres.default.find((genre) => genre.name === readGenre).id,
      ).then((data) => {
        this.setState({
          isLoaded: true,
          items: data.results,
        });
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
    updateCounter: state.updateCounter,
  }
);

export default connect(mapStateToProps, null)(Main);

Main.propTypes = {
  readYear: PropTypes.string,
  readRating: PropTypes.string,
  readGenre: PropTypes.string,
  updateCounter: PropTypes.number,
};

Main.defaultProps = {
  readYear: '',
  readRating: '',
  readGenre: '',
  updateCounter: 0,
};
