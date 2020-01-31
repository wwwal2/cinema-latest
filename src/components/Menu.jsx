import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import * as actions from '../redux/actions';
import menuStyle from '../css_modules/menuStyles.css';

function Menu(props) {
  const {
    tabNames,
    routes,
    addUIPageNum,
    update,
  } = props;

  const changePage = (value) => {
    addUIPageNum(value);
    update();
  };

  const tabs = tabNames.map((tabName) => {
    return (
      <Link
        to={routes[tabName.toLowerCase()]}
        className={menuStyle.tabs}
        key={tabName}
      >
        {
          tabName === 'Main'
            ? <button className={menuStyle.tabs} onClick={() => changePage(1)} type="button">{tabName}</button>
            : <button className={menuStyle.tabs} type="button">{tabName}</button>
        }
      </Link>

    );
  });

  return (
    <div className={menuStyle.menuContainer}>
      {tabs}
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  const { addUIPageNum, update } = bindActionCreators(actions, dispatch);
  return {
    addUIPageNum: (payload) => addUIPageNum(payload),
    update: () => update(),
  };
};

export default connect(null, mapDispatchToProps)(Menu);

Menu.propTypes = {
  tabNames: PropTypes.array,
  routes: PropTypes.object,
  addUIPageNum: PropTypes.func,
  update: PropTypes.func,
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
  addUIPageNum: () => { },
  update: () => { },
};
