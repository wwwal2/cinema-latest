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
  const { currentPage } = props;
  const routes = {
    main: '/',
    favorite: '/favorite',
    popular: '/popular',
  };

  return (
    <Router>
      <div className={style.wrapper}>
        <Header routes={routes} />
        <Pagination />
        <Switch>
          <Route path={`${routes.main}`} exact component={Main} />
          <Route path={`/${currentPage}`} component={Main} />
          <Route path={`${routes.favorite}`} exact component={Main} />
          <Route path={`${routes.popular}`} exact component={Main} />
        </Switch>
        <Pagination />
      </div>
      <Footer />
    </Router>
  );
}


const mapStateToProps = (state) => (
  {
    currentPage: state.UIpage,
  }
);
export default connect(mapStateToProps, null)(App);

App.propTypes = {
  currentPage: PropTypes.number,
};
App.defaultProps = {
  currentPage: 0,
};
