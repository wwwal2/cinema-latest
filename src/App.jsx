import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Main from './components/Main';
import Favorite from './components/Favorite';
import Popular from './components/Popular';
import Footer from './components/Footer';

import Pagination from './components/Pagination';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const routes = {
      main: '/',
      favorite: '/favorite',
      popular: '/popular',
    };

    return (
      <Router>
        <Header routes={routes} />
        <Switch>
          <Route path={`${routes.main}`} exact component={Main} />
          <Route path={`${routes.favorite}`} exact component={Favorite} />
          <Route path={`${routes.popular}`} exact component={Popular} />
        </Switch>
        <Pagination />
        <Footer />
      </Router>
    );
  }
}
