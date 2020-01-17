import React from 'react';
import PropTypes from 'prop-types';
import headerStyles from '../css_modules/headerStyles.css';
import logo from '../../images/logo.png';

import Menu from './Menu';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { name } = this.props;

    return (
      <div className={headerStyles.display}>
        <div>
          <img alt="out of logo" src={logo} className={headerStyles.logo} />
        </div>
        <Menu />
        <div className={headerStyles.background}>
          {name}
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  name: PropTypes.string,
};

Header.defaultProps = {
  name: 'al2',
};
