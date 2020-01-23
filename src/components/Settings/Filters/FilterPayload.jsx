import React from 'react';
import PropTypes from 'prop-types';

import TopButtons from './TopButtons';
import YearFilter from './YearFilter';
import Select from './Select';

export default function FilterPayload(props) {
  const { genres, rating } = props;

  return (
    <div>
      <TopButtons />
      <YearFilter />
      <div>
        <div>Countries</div>
        <Select genres={genres} />
      </div>
      <div>
        <div>Rating</div>
        <Select rating={rating} />
      </div>
    </div>
  );
}

FilterPayload.propTypes = {
  genres: PropTypes.object,
  rating: PropTypes.array,
};

FilterPayload.defaultProps = {
  genres: {
    Action: 28,
    Adventure: 12,
    Animation: 16,
    Comedy: 35,
    Crime: 80,
    Documentary: 99,
    Drama: 18,
    Fantasy: 14,
    History: 36,
    Horror: 27,
    Music: 10402,
    Thriller: 53,
    War: 10752,
    Western: 37,
  },
  rating: [3, 4, 5, 6, 7, 8, 9],
};
