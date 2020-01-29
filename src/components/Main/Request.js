export default class Request {
  constructor() {
    this.discoverUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=80ab1c9954395b4f678edc2f29c0a276&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false';
    this.genresUrl = 'https://api.themoviedb.org/3/genre/movie/list?api_key=80ab1c9954395b4f678edc2f29c0a276&language=en-US';
  }

  async getData(url) {
    const data = await fetch(`${url}`);

    if (!data.ok) {
      throw new Error(`Request with options ${url} failed. Status: ${data.status}`);
    }
    const response = await data.json();
    return response;
  }

  getMovies(page = 1, year = 2019, rate = 8, genre = 'Action') {
    return this.getData(`${this.discoverUrl}&page=${page}&year=${year}&vote_average.gte=${rate}&vote_average.lte=${rate + 1}&with_genres=${genre}`);
  }

  getGenres() {
    return this.getData(this.genresUrl);
  }
}
