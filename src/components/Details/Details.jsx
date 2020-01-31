import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import main from './details.css';
import favoriteOn from '../../../images/starFilled.png';
import favoriteOff from '../../../images/starEmpty.png';

import * as actions from '../../redux/actions';


function Card(props) {
  const [favorite, setFavorite] = useState(false);

  const toggleFavorite = () => {
    const { addFavorite, item } = props;
    addFavorite(item);
    setFavorite(!favorite);
  };

  const { item, addDetailsId } = props;
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
        onClick={() => toggleFavorite()}
      />
      <h3>
        {`${item.title} (${item.release_date.substr(0, 4)})`}
      </h3>
      <div>
        <img
          alt="no poster to this movie"
          src={`http://image.tmdb.org/t/p/w185/${item.poster_path}`}
          onClick={() => addDetailsId(item.id)}
        />
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

const mapDispatchToProps = (dispatch) => {
  const { addFavorite, addDetailsId } = bindActionCreators(actions, dispatch);
  return {
    addFavorite: (payload) => addFavorite(payload),
    addDetailsId: (payload) => addDetailsId(payload),
  };
};
export default connect(null, mapDispatchToProps)(Card);

Card.propTypes = {
  item: PropTypes.object,
  addFavorite: PropTypes.func,
  addDetailsId: PropTypes.func,
};

Card.defaultProps = {
  item: { title: 'empty' },
  addFavorite: () => { },
  addDetailsId: () => { },
};
