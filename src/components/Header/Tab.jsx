import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  addUIPageNum,
  update,
  defineSection,
  showDetails,
} from '../../redux/actions';
import { sections } from '../../constants/other';
import header from './Header.scss';

function Tab(props) {
  const {
    tabName,
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
    <button
      key={tabName}
      className={header.tabs}
      onClick={() => changeTab(tabName)}
      type="button"
    >
      {tabName}
    </button>
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
  addUIPageNum: PropTypes.func,
  defineSection: PropTypes.func,
  showDetails: PropTypes.func,
  update: PropTypes.func,
};

Tab.defaultProps = {
  tabName: '',
  addUIPageNum: () => { },
  defineSection: () => { },
  showDetails: () => { },
  update: () => { },
};
