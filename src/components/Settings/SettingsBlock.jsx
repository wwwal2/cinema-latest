import React from 'react';
import PropTypes from 'prop-types';
import filterStyles from '../../css_modules/filterStyles.css';

import FilterDropdown from './FilterDropdown';
import OptionsDropdown from './OptionsDropdown';

export default class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      settings: 'Filters',
      position: 'show',
    };
  }

  dropDown(info) {
    this.setState({
      settings: info,
    });
  }

  render() {
    const { filters, options } = this.props;
    const { settings, position } = this.state;

    return (
      <div className={filterStyles.container}>
        <div className={filterStyles.buttonContainer}>
          <button
            type="button"
            onClick={() => this.dropDown(filters)}
          >
            {filters}
          </button>
          <button
            type="button"
            onClick={() => this.dropDown(options)}
          >
            {options}
          </button>
        </div>
        <div className={filterStyles[position]}>
          {
            settings === filters
              ? <FilterDropdown />
              : <OptionsDropdown />
          }
        </div>
      </div>
    );
  }
}

Filter.propTypes = {
  filters: PropTypes.string,
  options: PropTypes.string,
};

Filter.defaultProps = {
  filters: 'Filters',
  options: 'Options',
};
