import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import card from './Card.scss';
import favoriteOn from '../../../images/starFilled.png';
import favoriteOff from '../../../images/starEmpty.png';

import * as actions from '../../redux/actions';
import { checkFavorite } from '../Utils';


function Card(props) {
  const {
    item,
    addFavorite,
    favoriteIds,
    addDetailsId,
    showDetails,
  } = props;

  const textLength = 200;

  const [favorite, setFavorite] = useState(checkFavorite(favoriteIds, item.id));

  const toggleFavorite = () => {
    addFavorite(item);
    setFavorite(!favorite);
  };

  const iconClick = (id) => {
    addDetailsId(id);
    showDetails(true);
  };

  return (
    <div className={card.card}>
      <img
        role="button"
        alt="favorite"
        src={
          favorite
            ? favoriteOn
            : favoriteOff
        }
        className={card.favorite}
        onClick={() => toggleFavorite()}
      />
      <h3>
        {`${item.title} (${item.release_date.substr(0, 4)})`}
      </h3>
      <div>
        <img
          alt="no poster to this movie"
          src={`http://image.tmdb.org/t/p/w185/${item.poster_path}`}
          onClick={() => iconClick(item.id)}
        />
      </div>
      <p className={card.text}>
        {
          item.overview.length > textLength
            ? `${item.overview.substr(0, textLength)}...`
            : item.overview
        }
      </p>
      <p>
        {`Rate ${item.vote_average}`}
      </p>
    </div>
  );
}

const mapStateToProps = (state) => (
  { favoriteIds: state.favoriteIds }
);

const mapDispatchToProps = (dispatch) => {
  const { addFavorite, addDetailsId, showDetails } = bindActionCreators(actions, dispatch);
  return {
    addFavorite: (payload) => addFavorite(payload),
    addDetailsId: (payload) => addDetailsId(payload),
    showDetails: (payload) => showDetails(payload),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Card);

Card.propTypes = {
  item: PropTypes.object,
  favoriteIds: PropTypes.array,
  addFavorite: PropTypes.func,
  addDetailsId: PropTypes.func,
  showDetails: PropTypes.func,
};

Card.defaultProps = {
  item: { title: 'empty' },
  favoriteIds: [],
  addFavorite: () => { },
  addDetailsId: () => { },
  showDetails: () => { },
};
