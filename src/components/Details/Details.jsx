import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import details from './Details.css';
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
        role="button"
        alt="favorite"
        src={
          !favorite
            ? favoriteOff
            : favoriteOn
        }
        className={details.favorite}
        onClick={() => toggleFavorite()}
      />
      <h3>{item.title}</h3>
      <div>
        <img
          alt="no poster to this movie"
          src={`http://image.tmdb.org/t/p/w185/${item.poster_path}`}
          onClick={exitDetails}
        />
      </div>
      <h4>
        <span>Countries: </span>
        {parsePayloadArray(item.production_countries, 'name')}
      </h4>
      <h4>{`Release: ${item.release_date}`}</h4>
      <h4>{`Budget: ${item.budget}`}</h4>
      <h4>{`Rating: ${item.vote_average}`}</h4>
      <h4>{parsePayloadArray(item.genres, 'name')}</h4>
      <p>{item.overview}</p>
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
