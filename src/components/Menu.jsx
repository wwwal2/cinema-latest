import React from 'react';
import PropTypes from 'prop-types';
import menuStyle from '../css_modules/menuStyles.css';

export default function Menu(props) {
  const { tabNames } = props;
  const tabs = tabNames.map((tabName) => <div>{tabName}</div>);
  return (
    <div className={menuStyle.background}>
      {tabs}
    </div>
  );
}

Menu.propTypes = {
  tabNames: PropTypes.array,
};

Menu.defaultProps = {
  tabNames: [
    'main',
    'popular',
    'favorite',
    'filters',
    'options',
  ],
};
