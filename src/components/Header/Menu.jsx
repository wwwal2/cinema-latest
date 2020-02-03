import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import * as actions from '../../redux/actions';
import header from './Header.css';

function Menu(props) {
  const {
    tabNames,
    routes,
    addUIPageNum,
    update,
  } = props;

  const changePage = (value) => {
    switch (value) {
      case 'Main':
        addUIPageNum(1);
        break;
      case 'Popular':
        addUIPageNum(2);
        break;
      case 'Favorite':
        addUIPageNum(3);
        break;
      default:
        return;
    }
    update();
  };

  const tabs = tabNames.map((tabName) => {
    return (
      <Link
        to={routes[tabName.toLowerCase()]}
        className={header.tabs}
        key={tabName}
      >
        <button className={header.tabs} onClick={() => changePage(tabName)} type="button">{tabName}</button>
      </Link>

    );
  });

  return (
    <div className={header.menuContainer}>
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
