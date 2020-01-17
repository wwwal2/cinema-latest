import React from 'react';
import PropTypes from 'prop-types';
import filterStyles from '../css_modules/filterStyles.css';

import FilterBody from './FilterBody';

export default class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { name } = this.props;

    return (
      <div className={filterStyles.container}>
        <div className={filterStyles.button}>{name}</div>
        <FilterBody />
      </div>
    );
  }
}

Filter.propTypes = {
  name: PropTypes.string,
};

Filter.defaultProps = {
  name: 'filter',
};
