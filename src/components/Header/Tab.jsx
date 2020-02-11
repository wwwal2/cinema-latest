import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import * as actions from '../../redux/actions';
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

const mapDispatchToProps = (dispatch) => {
  const {
    addUIPageNum,
    update,
    defineSection,
    showDetails,
  } = bindActionCreators(actions, dispatch);
  return {
    addUIPageNum: (payload) => addUIPageNum(payload),
    defineSection: (payload) => defineSection(payload),
    showDetails: (payload) => showDetails(payload),
    update: () => update(),
  };
};

export default connect(null, mapDispatchToProps)(Tab);

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
