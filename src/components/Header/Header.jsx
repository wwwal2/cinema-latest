import React from 'react';

import header from './Header.scss';
import logo from '../../../images/logo.png';

import Menu from './Menu';
import Settings from '../Settings';
import Search from '../Search';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <header className={header.container}>
        <img alt="logo" src={logo} className={header.logo} />
        <Menu />
        <Settings />
        <Search />
      </header>
    );
  }
}
