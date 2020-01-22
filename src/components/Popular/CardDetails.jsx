import React from 'react';
import PropTypes from 'prop-types';
import cardDetailsStyles from './cardDetailsStyles.css';

export default class CardDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorite: false,
    };
  }

  toggleFavorite() {
    const { favorite } = this.state;
    this.setState({
      favorite: !favorite,
    });
  }

  render() {
    const { movie } = this.props;
    const { favorite } = this.state;
    return (
      <div className={cardDetailsStyles.card}>
        <div className={cardDetailsStyles.poster}>
          <img alt="poster" src={`http://image.tmdb.org/t/p/w342/${movie.poster_path}`} />
        </div>
        <button
          type="button"
          className={
            !favorite
              ? cardDetailsStyles.button
              : `${cardDetailsStyles.button}${cardDetailsStyles.favorite}`
          }
          onClick={() => this.toggleFavorite()}
        >
          Add to Favorite
        </button>
        <div className={cardDetailsStyles.line2}>
          <h3>
            {`${movie.title} (${movie.release_date.substr(0, 4)})`}
          </h3>
          <p>
            popularity:
            {movie.popularity}
          </p>
          <p>
            rating:
            {movie.vote_average}
          </p>
          <p>
            votes:
            {movie.vote_count}
          </p>
        </div>
        <p>
          {movie.overview}
        </p>
      </div>
    );
  }
}

CardDetails.propTypes = {
  movie: PropTypes.object,
};

CardDetails.defaultProps = {
  movie: {
    title: 'empty',
  },
};
