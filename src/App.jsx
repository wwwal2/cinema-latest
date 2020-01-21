import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Main from './components/Main/Main';
import Favorite from './components/Favorite/Favorite';
import Popular from './components/Popular/Popular';
import Footer from './components/Footer';

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
        <Footer />
      </Router>
    );
  }
}
