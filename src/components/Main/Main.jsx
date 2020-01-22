import React from 'react';
import bodyStyles from './bodyStyles.css';
import Request from '../Request';

import Card from './Card';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.request = new Request();
  }

  componentDidMount() {
    // this.request.getByRating(3).then((data) => {
    //   console.log(data);
    //   this.setState({
    //     isLoaded: true,
    //     items: data.results,
    //   });
    // });
  }

  render() {
    const { isLoaded, items } = this.state;
    if (isLoaded) {
      return (
        <div className={bodyStyles.pageBody}>
          {items.map((item) => {
            return (
              <Card key={item.id} item={item} />
            );
          })}
        </div>
      );
    }
    return <h1>MAIN</h1>;
  }
}
