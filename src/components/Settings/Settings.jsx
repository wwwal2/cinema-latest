import React from 'react';
import PropTypes from 'prop-types';
import settingsStyles from './Settings.css';

import FilterPayload from './Filters';
import OptionsPayload from './Options';

export default class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      settings: 'Filters',
      dropdown: false,
    };
  }

  toggle(info) {
    const { settings, dropdown } = this.state;
    if (info === settings || dropdown === false) {
      this.setState({
        dropdown: !dropdown,
      });
    }
    this.setState({
      settings: info,
    });
  }

  render() {
    const { filters, options } = this.props;
    const { settings, dropdown } = this.state;

    return (
      <div className={settingsStyles.container}>
        <div className={settingsStyles.buttonContainer}>
          <button
            type="button"
            onClick={() => this.toggle(filters)}
          >
            {filters}
          </button>
          <button
            type="button"
            onClick={() => this.toggle(options)}
          >
            {options}
          </button>
        </div>
        <div className={settingsStyles[`${dropdown}Position`]}>
          {
            settings === filters
              ? <FilterPayload />
              : <OptionsPayload />
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
