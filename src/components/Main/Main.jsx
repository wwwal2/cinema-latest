import React from 'react';
import bodyStyles from './bodyStyles.css';

import Card from './Card';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=80ab1c9954395b4f678edc2f29c0a276&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&year=2018&vote_average.lte=8')
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        this.setState({
          isLoaded: true,
          items: res.results,
        });
      });
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
