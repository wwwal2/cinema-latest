import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../../redux/actions';

function FilterPayload(props) {
  const {
    genres, rating, addRating, readTheStore,
  } = props;
  return (
    <select onChange={
      (event) => {
        console.log(readTheStore, event.target.value);
        return addRating(event.target.value);
      }
    }
    >
      {
        (rating[0]
          ? rating
          : Object.keys(genres))
          .map((option) => {
            return (
              <option value={option} key={option}>
                {option}
              </option>
            );
          })
      }
    </select>
  );
}

const mapStateToProps = (state) => (
  { readTheStore: state }
);

const mapDispatchToProps = (dispatch) => {
  const { addRating, addGenre } = bindActionCreators(actions, dispatch);
  return {
    addRating: (payload) => addRating(payload),
    addGenre: (payload) => addGenre(payload),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterPayload);

FilterPayload.propTypes = {
  genres: PropTypes.object,
  rating: PropTypes.array,
  addRating: PropTypes.func,
  readTheStore: PropTypes.object,
};

FilterPayload.defaultProps = {
  genres: {
    properties: false,
  },
  rating: [],
  addRating: () => { },
  readTheStore: {},
};
