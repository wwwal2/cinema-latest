import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import TopButtons from './TopButtons';
import YearFilter from './YearFilter';
import Select from './Select';

function FilterPayload(props) {
  const {
    ratingPoints,
    currentRating,
    currentGenre,
    allGenres,
  } = props;
  return (
    <div>
      <TopButtons />
      <YearFilter />
      <div>
        <div>Genres</div>
        <Select selected={currentGenre} allGenres={allGenres} />
      </div>
      <div>
        <div>Rating</div>
        <Select selected={currentRating} ratingPoints={ratingPoints} />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => (
  {
    currentRating: state.rating,
    currentGenre: state.genre,
    allGenres: state.allGenres,
  }
);

export default connect(mapStateToProps, null)(FilterPayload);

FilterPayload.propTypes = {
  ratingPoints: PropTypes.array,
  currentRating: PropTypes.string,
  currentGenre: PropTypes.string,
  allGenres: PropTypes.array,
};

FilterPayload.defaultProps = {
  ratingPoints: [3, 4, 5, 6, 7, 8, 9],
  currentRating: '',
  currentGenre: '',
  allGenres: [],
};
