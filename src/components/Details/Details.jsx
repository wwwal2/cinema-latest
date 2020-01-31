import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import details from './details.css';
import favoriteOn from '../../../images/starFilled.png';
import favoriteOff from '../../../images/starEmpty.png';

import * as actions from '../../redux/actions';
import Utility from '../Utility';


function Details(props) {
  const [favorite, setFavorite] = useState(false);

  const toggleFavorite = () => {
    const { addFavorite, item } = props;
    addFavorite(item);
    setFavorite(!favorite);
  };

  const { item, addDetailsId } = props;

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
          onClick={() => addDetailsId(item.id)}
        />
      </div>
      <h4>
        <span>Countries: </span>
        {Utility.parsePayloadArray(item.production_countries, 'name')}
      </h4>
      <h4>{`Release: ${item.release_date}`}</h4>
      <h4>{`Budget: ${item.budget}`}</h4>
      <h4>{`Rating: ${item.vote_average}`}</h4>
      <h4>{Utility.parsePayloadArray(item.genres, 'name')}</h4>
      <p>{item.overview}</p>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  const { addFavorite, addDetailsId } = bindActionCreators(actions, dispatch);
  return {
    addFavorite: (payload) => addFavorite(payload),
    addDetailsId: (payload) => addDetailsId(payload),
  };
};
export default connect(null, mapDispatchToProps)(Details);

Details.propTypes = {
  item: PropTypes.object,
  addFavorite: PropTypes.func,
  addDetailsId: PropTypes.func,
};

Details.defaultProps = {
  item: { title: 'empty' },
  addFavorite: () => { },
  addDetailsId: () => { },
};
