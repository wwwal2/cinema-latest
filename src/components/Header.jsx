import React from 'react';
import headerStyles from '../css_modules/headerStyles.css';
import logo from '../../images/logo.png';

import Menu from './Menu';
import Filter from './Settings/SettingsBlock';
import Search from './Search/SearchBlock';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={headerStyles.display}>
        <div>
          <img alt="out of logo" src={logo} className={headerStyles.logo} />
        </div>
        <Menu />
        <Filter />
        <Search />
      </div>
    );
  }
}
