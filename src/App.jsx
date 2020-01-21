import React from 'react';
import Header from './components/Header';
import Body from './components/Body/Body';
import Footer from './components/Footer';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}
