import React from 'react';
import Header from './components/Header';
import Body from './components/Body/Body';

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
      </div>
    );
  }
}
