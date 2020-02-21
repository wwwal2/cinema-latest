import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import style from './App.scss';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer/Footer';


import Pagination from './components/Pagination';

function App(props) {
  const { detailsTab } = props;

  return (
    <Router>
      <div className={detailsTab ? `${style.wrapper} ${style.details}` : style.wrapper}>
        <Header />
        <Pagination />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/:section/" exact component={Main} />
          <Route path="/:section/:page/:cardsNum/" exact component={Main} />
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
    detailsTab: state.status.detailsTab,
  }
);
export default connect(mapStateToProps, null)(App);

App.propTypes = {
  detailsTab: PropTypes.bool,
};
App.defaultProps = {
  detailsTab: false,
};
