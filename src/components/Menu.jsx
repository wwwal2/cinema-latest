import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import menuStyle from '../css_modules/menuStyles.css';

export default function Menu(props) {
  const { tabNames, routes } = props;

  const tabs = tabNames.map((tabName) => {
    return (
      <Link
        to={routes[tabName.toLowerCase()]}
        className={menuStyle.tabs}
        key={tabName}
      >
        <button
          className={menuStyle.tabs}
          type="button"
        >
          {tabName}
        </button>
      </Link>

    );
  });

  return (
    <div className={menuStyle.menuContainer}>
      {tabs}
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
