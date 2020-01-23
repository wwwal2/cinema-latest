import React from 'react';
import PropTypes from 'prop-types';
import bodyStyles from './bodyStyles.css';
import favoriteOn from '../../../images/starFilled.png';
import favoriteOff from '../../../images/starEmpty.png';

export default class Card extends React.Component {
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
    const { item } = this.props;
    const { favorite } = this.state;
    const textLength = 200;
    return (
      <div className={bodyStyles.card}>
        <img
          role="button"
          alt="favorite"
          src={
            !favorite
              ? favoriteOff
              : favoriteOn
          }
          className={bodyStyles.favorite}
          onClick={() => this.toggleFavorite()}
          onKeyDown={() => this.toggleFavorite()}
        />
        <h3>
          {`${item.title} (${item.release_date.substr(0, 4)})`}
        </h3>
        <div>
          <img alt="poster" src={`http://image.tmdb.org/t/p/w185/${item.poster_path}`} />
        </div>
        <p>
          {
            item.overview.length > textLength
              ? `${item.overview.substr(0, textLength)}...`
              : item.overview
          }
        </p>
        <p>
          Rate
          {
            item.vote_average
          }
        </p>
      </div>
    );
  }
}

Card.propTypes = {
  item: PropTypes.object,
};

Card.defaultProps = {
  item: {
    title: 'empty',
  },
};
