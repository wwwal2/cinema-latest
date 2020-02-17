import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import style from './App.scss';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer/Footer';

import Pagination from './components/Pagination';

function App(props) {
  const { currentPage, detailsTab } = props;
  const routes = {
    main: '/',
    favorite: '/favorite',
    popular: '/popular',
  };

  return (
    <Router>
      <div className={detailsTab ? `${style.wrapper} ${style.details}` : style.wrapper}>
        <Header routes={routes} />
        <Pagination />
        <Switch>
          <Route path={`${routes.main}`} exact component={Main} />
          <Route path={`/${currentPage}`} component={Main} />
          <Route path={`${routes.favorite}`} exact component={Main} />
          <Route path={`${routes.popular}`} exact component={Main} />
        </Switch>
        <Pagination />
        <div className={style.buffer} />
      </div>
      <Footer />
    </Router>
  );
}


const mapStateToProps = (state) => (
  {
    currentPage: state.UIpage,
    detailsTab: state.detailsTab,
  }
);
export default connect(mapStateToProps, null)(App);

App.propTypes = {
  currentPage: PropTypes.number,
  detailsTab: PropTypes.bool,
};
App.defaultProps = {
  currentPage: 0,
  detailsTab: false,
};
