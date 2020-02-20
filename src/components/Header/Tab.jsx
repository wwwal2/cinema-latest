import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import {
  addUIPageNum,
  update,
  defineSection,
  showDetails,
} from '../../redux/actions';
import { sections } from '../../constants';
import header from './Header.scss';

function Tab(props) {
  const {
    tabName,
    route,
    addUIPageNum,
    defineSection,
    update,
    showDetails,
  } = props;

  const changeTab = (value) => {
    addUIPageNum(1);
    defineSection(sections[value.toLowerCase()]);
    showDetails(false);
    update();
  };

  return (
    <Link
      to={route}
      className={header.tabs}
      key={tabName}
    >
      <button
        className={header.tabs}
        onClick={() => changeTab(tabName)}
        type="button"
      >
        {tabName}
      </button>
    </Link>
  );
}

export default connect(null, {
  addUIPageNum,
  update,
  defineSection,
  showDetails,
})(Tab);

Tab.propTypes = {
  tabName: PropTypes.string,
  route: PropTypes.string,
  addUIPageNum: PropTypes.func,
  defineSection: PropTypes.func,
  showDetails: PropTypes.func,
  update: PropTypes.func,
};

Tab.defaultProps = {
  tabName: '',
  route: '',
  addUIPageNum: () => { },
  defineSection: () => { },
  showDetails: () => { },
  update: () => { },
};
