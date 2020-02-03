import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import * as actions from '../../redux/actions';
import { sections } from '../../constants';
import header from './Header.css';

function Menu(props) {
  const {
    tabNames,
    routes,
    addUIPageNum,
    defineSection,
    update,
  } = props;

  const changePage = (value) => {
    switch (value) {
      case 'Main':
        addUIPageNum(1);
        defineSection(sections.main);
        break;
      case 'Popular':
        addUIPageNum(1);
        defineSection(sections.popular);
        break;
      case 'Favorite':
        addUIPageNum(1);
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
  const { addUIPageNum, update, defineSection } = bindActionCreators(actions, dispatch);
  return {
    addUIPageNum: (payload) => addUIPageNum(payload),
    defineSection: (payload) => defineSection(payload),
    update: () => update(),
  };
};

export default connect(null, mapDispatchToProps)(Menu);

Menu.propTypes = {
  tabNames: PropTypes.array,
  routes: PropTypes.object,
  addUIPageNum: PropTypes.func,
  defineSection: PropTypes.func,
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
  defineSection: () => { },
  update: () => { },
};
