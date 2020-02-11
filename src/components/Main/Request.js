export default class Request {
  constructor() {
    this.key = '80ab1c9954395b4f678edc2f29c0a276';
    this.basicUrl = 'https://api.themoviedb.org/3/';
    this.discoverUrl = `${this.basicUrl}discover/movie?api_key=${this.key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false`;
    this.genresUrl = `${this.basicUrl}genre/movie/list?api_key=${this.key}&language=en-US`;
    this.detailsUrl = `${this.basicUrl}movie/`;
    this.popularUrl = `${this.basicUrl}movie/popular?api_key=${this.key}&language=en-US&page=`;
    this.findUrl = `${this.basicUrl}search/movie?api_key=${this.key}&language=en-US`;
    this.keyNames = [
      '&page=',
      '&year=',
      '&vote_average.gte=',
      '&with_genres=',
    ];
  }

  async getData(url) {
    const data = await fetch(`${url}`);

    if (!data.ok) {
      throw new Error(`Request with options ${url} failed. Status: ${data.status}`);
    }
    const response = await data.json();
    return response;
  }

  getMovies(page, year, rate, genre) {
    return this.getData(`${this.discoverUrl}&page=${page}&year=${year}&vote_average.gte=${rate}&vote_average.lte=${rate + 1}&with_genres=${genre}`);
  }

  getPopular(page = 1) {
    return this.getData(`${this.popularUrl}${page}`);
  }

  getGenres() {
    return this.getData(this.genresUrl);
  }

  getDetails(id) {
    return this.getData(`${this.detailsUrl}${id}?api_key=${this.key}&language=en-US`);
  }

  findMovie(page, query) {
    return this.getData(`${this.findUrl}&query=${query}&page=${page}&include_adult=false`);
  }
}
