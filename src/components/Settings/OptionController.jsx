import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import filterStyles from '../../css_modules/filterStyles.css';

export default class OptionsController extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 8,
    };
  }

  handleChange(num) {
    this.setState((state) => ({
      value: state.value + num,
    }));
  }

  render() {
    const { name } = this.props;
    const { value } = this.state;

    return (
      <div className={filterStyles.flex}>
        <div className="label">{name}</div>
        <i
          className={cx(filterStyles.arrow, filterStyles.left)}
          onClick={() => this.handleChange(-1)}
          onKeyDown={() => this.handleChange(-1)}
          role="toolbar"
        />
        <div className="value">{value}</div>
        <i
          className={cx(filterStyles.arrow, filterStyles.right)}
          onClick={() => this.handleChange(+1)}
          onKeyDown={() => this.handleChange(+1)}
          role="toolbar"
        />
      </div>
    );
  }
}

OptionsController.propTypes = {
  name: PropTypes.string,
};

OptionsController.defaultProps = {
  name: 'Controller',
};
