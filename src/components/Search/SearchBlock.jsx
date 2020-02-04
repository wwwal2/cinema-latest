import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../../redux/actions';
import { sections } from '../../constants';
import searchStyles from './SearchBlock.css';

function Search(props) {
  const [query, setQuery] = useState('');
  const {
    placeHolder,
    start,
    readTheStore,
    addQuery,
    defineSection,
    update,
  } = props;


  const userInput = (event) => {
    const { value } = event.target;
    setQuery(value);
  };

  const submit = (event) => {
    if (event.key === 'Enter') {
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
        {`${start} ${readTheStore}`}
      </button>
    </div>
  );
}

const mapStateToProps = (state) => (
  { readTheStore: state.storeTest }
);

const mapDispatchToProps = (dispatch) => {
  const { addQuery, defineSection, update } = bindActionCreators(actions, dispatch);
  return {
    addQuery: (payload) => addQuery(payload),
    defineSection: (payload) => defineSection(payload),
    update: () => update(),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);

Search.propTypes = {
  placeHolder: PropTypes.string,
  start: PropTypes.string,
  readTheStore: PropTypes.string,
  addQuery: PropTypes.func,
  defineSection: PropTypes.func,
  update: PropTypes.func,
};

Search.defaultProps = {
  placeHolder: 'Search movies',
  start: 'Start',
  readTheStore: 'store',
  addQuery: () => { },
  defineSection: () => { },
  update: () => { },
};
