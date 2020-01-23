import React from 'react';
import PropTypes from 'prop-types';

import headerStyles from '../css_modules/headerStyles.css';
import logo from '../../images/logo.png';

import Menu from './Menu';
import Settings from './Settings/SettingsBlock';
import Search from './Search/SearchBlock';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { routes } = this.props;
    return (
      <div className={headerStyles.display}>
        <div className={headerStyles.logoContainer}>
          <img alt="out of logo" src={logo} className={headerStyles.logo} />
        </div>
        <Menu routes={routes} />
        <Settings />
        <Search />
      </div>
    );
  }
}

Header.propTypes = {
  routes: PropTypes.object,
};

Header.defaultProps = {
  routes: {
    main: '/',
  },
};
