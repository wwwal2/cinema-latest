import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import main from './main.css';
import favoriteOn from '../../../images/starFilled.png';
import favoriteOff from '../../../images/starEmpty.png';

import * as actions from '../../redux/actions';


class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorite: false,
    };
  }

  toggleFavorite() {
    const { favorite } = this.state;
    const { addFavorite, item } = this.props;
    addFavorite(item);
    this.setState({
      favorite: !favorite,
    });
  }


  render() {
    const { item } = this.props;
    const { favorite } = this.state;
    const textLength = 200;
    return (
      <div className={main.card}>
        <img
          role="button"
          alt="favorite"
          src={
            !favorite
              ? favoriteOff
              : favoriteOn
          }
          className={main.favorite}
          onClick={() => this.toggleFavorite()}
        />
        <h3>
          {`${item.title} (${item.release_date.substr(0, 4)})`}
        </h3>
        <div>
          <img alt="no poster to this movie" src={`http://image.tmdb.org/t/p/w185/${item.poster_path}`} />
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
        <p>
          {
            item.id
          }
        </p>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  const { addFavorite } = bindActionCreators(actions, dispatch);
  return {
    addFavorite: (payload) => addFavorite(payload),
  };
};
export default connect(null, mapDispatchToProps)(Card);

Card.propTypes = {
  item: PropTypes.object,
  addFavorite: PropTypes.func,
};

Card.defaultProps = {
  item: { title: 'empty' },
  addFavorite: () => { },
};
