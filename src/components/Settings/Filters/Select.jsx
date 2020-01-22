import React from 'react';
import PropTypes from 'prop-types';

export default function FilterPayload(props) {
  const { selectOptions } = props;
  const generate = selectOptions.map((option) => {
    return (
      <option value={option} key={option}>
        {option}
      </option>
    );
  });

  return (
    <select>
      {generate}
    </select>
  );
}


FilterPayload.propTypes = {
  selectOptions: PropTypes.array,
};

FilterPayload.defaultProps = {
  selectOptions: [
    'no options passed',
  ],
};
