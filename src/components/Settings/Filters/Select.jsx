import React from 'react';
import PropTypes from 'prop-types';

export default function FilterPayload(props) {
  const { selectOptions } = props;

  const createOptions = () => {
    const generate = selectOptions.map((option) => {
      return (
        <option value={option} key={option}>
          {option}
        </option>
      );
    });
    return generate;
  };

  return (
    <select>
      {createOptions}
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
