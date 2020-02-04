import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import details from './Details.scss';
import favoriteOn from '../../../images/starFilled.png';
import favoriteOff from '../../../images/starEmpty.png';

import * as actions from '../../redux/actions';
import { checkFavorite, parsePayloadArray } from '../Utils';


function Details(props) {
  const {
    item,
    favoriteIds,
    addFavorite,
    exitDetails,
  } = props;

  const [favorite, setFavorite] = useState(checkFavorite(favoriteIds, item.id));

  const toggleFavorite = () => {
    addFavorite(item);
    setFavorite(!favorite);
  };

  return (
    <div className={details.container}>
      <img
        className={details.poster}
        alt="no poster to this movie"
        src={`http://image.tmdb.org/t/p/w342/${item.poster_path}`}
        onClick={exitDetails}
      />

      <div className={details.informContainer}>
        <img
          alt="favorite"
          src={favorite ? favoriteOn : favoriteOff}
          className={details.favorite}
          onClick={() => toggleFavorite()}
        />
        <h2>{item.title}</h2>
        <div>{`Release: ${item.release_date}`}</div>
        <div>
          <span>Production: </span>
          {parsePayloadArray(item.production_countries, 'name')}
        </div>
        <div>{`Budget: ${item.budget}$`}</div>
        <div>{`Rating: ${item.vote_average} Votes: ${item.vote_count}`}</div>
        <div>{parsePayloadArray(item.genres, 'name')}</div>
        <p>{item.overview}</p>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => (
  {
    favoriteIds: state.favoriteIds,
  }
);

const mapDispatchToProps = (dispatch) => {
  const { addFavorite, addDetailsId } = bindActionCreators(actions, dispatch);
  return {
    addFavorite: (payload) => addFavorite(payload),
    addDetailsId: (payload) => addDetailsId(payload),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Details);

Details.propTypes = {
  item: PropTypes.object,
  favoriteIds: PropTypes.array,
  addFavorite: PropTypes.func,
  exitDetails: PropTypes.func,
};

Details.defaultProps = {
  item: { title: 'empty' },
  favoriteIds: [],
  addFavorite: () => { },
  exitDetails: () => { },
};
