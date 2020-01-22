export default class Request {
  constructor() {
    this.urlBase = 'https://api.themoviedb.org/3/discover/movie?api_key=80ab1c9954395b4f678edc2f29c0a276&language=en-US';
  }

  async getData(url) {
    const data = await fetch(`${this.urlBase}${url}`);

    if (!data.ok) {
      throw new Error(`Request with options ${url} failed. Status: ${data.status}`);
    }
    const response = await data.json();
    return response;
  }

  getByRating(rate) {
    return this.getData(`&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&vote_average.gte=${rate}&vote_average.lte=${rate + 1}`);
  }
}
