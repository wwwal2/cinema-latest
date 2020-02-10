import React from 'react';
import PropTypes from 'prop-types';
import header from './Header.scss';
import Tab from './Tab';

export default function Menu(props) {
  const {
    tabNames,
    routes,
  } = props;

  return (
    <div className={header.menuContainer}>
      {
        tabNames.map((tabName) => <Tab tabName={tabName} route={routes[tabName.toLowerCase()]} />)
      }
    </div>
  );
}


Menu.propTypes = {
  tabNames: PropTypes.array,
  routes: PropTypes.object,
};

Menu.defaultProps = {
  tabNames: [
    'Main',
    'Popular',
    'Favorite',
  ],
  routes: {
    main: '/',
  },
};
