import React from 'react';
import CardDetails from './CardDetails';

export default class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {
        adult: false,
        backdrop_path: '/5Iw7zQTHVRBOYpA0V6z0yypOPZh.jpg',
        id: 181808,
        original_language: 'en',
        original_title: 'Star Wars: The Last Jedi',
        overview: 'Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.',
        popularity: 54.85,
        poster_path: '/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg',
        release_date: '2017-12-13',
        title: 'Star Wars: The Last Jedi',
        video: false,
        vote_average: 7,
        vote_count: 9718,
      },
    };
  }

  render() {
    const { movie } = this.state;
    return (
      <div>
        <h1>Popular</h1>
        <CardDetails movie={movie} />
      </div>
    );
  }
}
