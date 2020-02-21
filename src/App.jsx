import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import style from './App.scss';

import { routes } from './constants';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer/Footer';


import Pagination from './components/Pagination';

function App(props) {
  const { currentPage, detailsTab, section } = props;

  return (
    <Router>
      <div className={detailsTab ? `${style.wrapper} ${style.details}` : style.wrapper}>
        <Header />
        <Pagination />
        <Switch>
          <Route path={`${routes.main}`} exact component={Main} />
          <Route path={`${routes[section]}${currentPage}`} exact component={Main} />
        </Switch>
        <Pagination />
        <footer className={style.buffer} />
      </div>
      <Footer />
    </Router>
  );
}


const mapStateToProps = (state) => (
  {
    currentPage: state.status.UIpage,
    detailsTab: state.status.detailsTab,
    section: state.status.section,
  }
);
export default connect(mapStateToProps, null)(App);

App.propTypes = {
  currentPage: PropTypes.number,
  detailsTab: PropTypes.bool,
  section: PropTypes.string,
};
App.defaultProps = {
  section: '',
  currentPage: 0,
  detailsTab: false,
};
