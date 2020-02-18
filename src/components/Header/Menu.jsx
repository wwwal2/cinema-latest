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
    <nav className={header.menuContainer}>
      {
        tabNames.map(
          (tabName) => {
            return (
              <Tab
                tabName={tabName}
                route={routes[tabName.toLowerCase()]}
                key={tabName}
              />
            );
          },
        )
      }
    </nav>
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
