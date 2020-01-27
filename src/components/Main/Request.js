export default class Request {
  constructor() {
    this.urlBase = 'https://api.themoviedb.org/3/discover/movie?api_key=80ab1c9954395b4f678edc2f29c0a276&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false';
  }

  async getData(url) {
    const data = await fetch(`${this.urlBase}${url}`);

    if (!data.ok) {
      throw new Error(`Request with options ${url} failed. Status: ${data.status}`);
    }
    const response = await data.json();
    return response;
  }

  getMovies(page = 1, year = 2019, rate = 8, genre = 'Action') {
    return this.getData(`&page=${page}&year=${year}&vote_average.gte=${rate}&vote_average.lte=${rate + 1}&with_genres=${genre}`);
  }
}
