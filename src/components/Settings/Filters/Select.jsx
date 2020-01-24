import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../../redux/actions';

function Select(props) {
  const {
    selected,
    allGenres,
    ratingPoints,
    addRating,
    addGenre,
  } = props;

  function generateSelect(options, current, reduxAction) {
    return (
      <select
        onChange={(event) => reduxAction(event.target.value)}
        value={current}
      >
        {options.map((option) => {
          return (
            <option
              value={option}
              key={option}
            >
              {option}
            </option>
          );
        })}
      </select>
    );
  }

  return (
    ratingPoints[0]
      ? generateSelect(ratingPoints, selected, addRating)
      : generateSelect(allGenres.map((genre) => genre.name), selected, addGenre)
  );
}

const mapDispatchToProps = (dispatch) => {
  const { addRating, addGenre } = bindActionCreators(actions, dispatch);
  return {
    addRating: (payload) => addRating(payload),
    addGenre: (payload) => addGenre(payload),
  };
};

export default connect(null, mapDispatchToProps)(Select);

Select.propTypes = {
  allGenres: PropTypes.array,
  ratingPoints: PropTypes.array,
  addRating: PropTypes.func,
  addGenre: PropTypes.func,
  readTheStore: PropTypes.object,
};

Select.defaultProps = {
  allGenres: [],
  ratingPoints: [],
  addRating: () => { },
  addGenre: () => { },
  readTheStore: {},
};
