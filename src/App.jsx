import React from 'react';
import styles from './style.css';

import Test from './components/Test';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  // componentDidMount() {
  //   fetch('https://api.themoviedb.org/3/movie/550?api_key=80ab1c9954395b4f678edc2f29c0a276&query=batman')
  //   // fetch('https://api.themoviedb.org/3/discover/movie?api_key=80ab1c9954395b4f678edc2f29c0a276&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&year=2018&vote_average.lte=8')
  //   .then(res => res.json())
  //   .then((result) => {
  //     this.setState({
  //       items: result
  //     })
  //   })
  // }

  render() {
    const num = 2;
    return (
      <div className={styles.background}>
        <h1 className={styles.color}>
          {/* {JSON.stringify(this.state.items)} */}
          <Test name={num} />
        </h1>
      </div>
    );
  }
}
