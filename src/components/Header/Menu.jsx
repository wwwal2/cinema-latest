import React from 'react';
import PropTypes from 'prop-types';
import { routes } from '../../constants';
import header from './Header.scss';
import Tab from './Tab';

export default function Menu(props) {
  const { tabNames } = props;

  return (
    <menu className={header.menuContainer}>
      {
        tabNames.map(
          (tabName) => {
            return (
              <Tab
                tabName={tabName}
                route={`${routes[tabName.toLowerCase()]}1`}
                key={tabName}
              />
            );
          },
        )
      }
    </menu>
  );
}


Menu.propTypes = {
  tabNames: PropTypes.array,
};

Menu.defaultProps = {
  tabNames: [
    'Main',
    'Popular',
    'Favorite',
  ],
};
