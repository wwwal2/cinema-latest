import React from 'react';
import PropTypes from 'prop-types';

import * as genres from '../../Main/genres.json';
import TopButtons from './TopButtons';
import YearFilter from './YearFilter';
import Select from './Select';

export default function FilterPayload(props) {
  const { rating } = props;

  return (
    <div>
      <TopButtons />
      <YearFilter />
      <div>
        <div>Genres</div>
        <Select genres={genres.default} />
      </div>
      <div>
        <div>Rating</div>
        <Select rating={rating} />
      </div>
    </div>
  );
}

FilterPayload.propTypes = {
  rating: PropTypes.array,
};

FilterPayload.defaultProps = {
  rating: [3, 4, 5, 6, 7, 8, 9],
};
