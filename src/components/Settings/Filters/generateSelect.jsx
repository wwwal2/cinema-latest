import React from 'react';
import filters from './FilterPayload.scss';

export default function generateSelect(options, current, reduxAction, id) {
  return (
    <div className={filters.gridContainer}>

      <select
        onChange={(event) => reduxAction(event.target.value)}
        value={current}
        id={id}
        className={filters.select}
      >
        {
          options.map((option) => {
            return (
              <option
                value={option}
                key={option}
              >
                {option}
              </option>
            );
          })
        }
      </select>

      <label
        htmlFor={id}
        className={filters.label}
      >
        {`select ${id}`}
      </label>

    </div>
  );
}
