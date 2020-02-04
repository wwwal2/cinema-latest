import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../../redux/actions';
import { sections } from '../../constants';
import searchStyles from './SearchBlock.scss';

function Search(props) {
  const [query, setQuery] = useState('');
  const {
    placeHolder,
    start,
    addQuery,
    defineSection,
    update,
    addUIPageNum,
  } = props;


  const userInput = (event) => {
    const { value } = event.target;
    setQuery(value);
  };

  const submit = (event) => {
    if (event.key === 'Enter' || event.type === 'click') {
      addUIPageNum(1);
      addQuery(encodeURIComponent(query.trim()));
      defineSection(sections.search);
      update();
      setQuery('');
    }
  };

  return (
    <div className={searchStyles.subgrid}>
      <input
        value={query}
        type="text"
        placeholder={placeHolder}
        className={searchStyles.search}
        onKeyPress={submit}
        onChange={userInput}
      />
      <button
        type="button"
        className={searchStyles.start}
        onClick={submit}
      >
        {start}
      </button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  const {
    addQuery,
    defineSection,
    update,
    addUIPageNum,
  } = bindActionCreators(actions, dispatch);
  return {
    addQuery: (payload) => addQuery(payload),
    addUIPageNum: (payload) => addUIPageNum(payload),
    defineSection: (payload) => defineSection(payload),
    update: () => update(),
  };
};

export default connect(null, mapDispatchToProps)(Search);

Search.propTypes = {
  placeHolder: PropTypes.string,
  start: PropTypes.string,
  addQuery: PropTypes.func,
  defineSection: PropTypes.func,
  update: PropTypes.func,
  addUIPageNum: PropTypes.func,
};

Search.defaultProps = {
  placeHolder: 'Search movies',
  start: 'Start',
  addQuery: () => { },
  defineSection: () => { },
  update: () => { },
  addUIPageNum: () => { },
};
