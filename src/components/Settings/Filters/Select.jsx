import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../../redux/actions';

function Select(props) {
  const {
    genres,
    rating,
    addRating,
    addGenre,
    // readTheStore,
    selectProps,
  } = props;

  function generateSelect(options, selected, reduxAction) {
    // console.log(readTheStore);
    return (
      <select
        onChange={(event) => reduxAction(event.target.value)}
        defaultValue={selected}
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
    rating[0]
      ? generateSelect(rating, selectProps.rating, addRating)
      : generateSelect(genres.map((genre) => genre.name), selectProps.genre, addGenre)
  );
}

// const mapStateToProps = (state) => (
//   { readTheStore: state }
// );

const mapDispatchToProps = (dispatch) => {
  const { addRating, addGenre } = bindActionCreators(actions, dispatch);
  return {
    addRating: (payload) => addRating(payload),
    addGenre: (payload) => addGenre(payload),
  };
};

export default connect(null, mapDispatchToProps)(Select);

Select.propTypes = {
  genres: PropTypes.array,
  rating: PropTypes.array,
  addRating: PropTypes.func,
  addGenre: PropTypes.func,
  // readTheStore: PropTypes.object,
};

Select.defaultProps = {
  genres: [],
  rating: [],
  addRating: () => { },
  addGenre: () => { },
  // readTheStore: {},
};
