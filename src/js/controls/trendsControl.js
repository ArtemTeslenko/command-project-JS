import { fetchFilmsTrends } from '../requests';
import { fetchGenreId } from '../requests';
export let genreIdArr = [];
export function trendsControls() {
  let page = 1;

  fetchGenreId()
    .then(genreId => {
      genreIdArr = genreId.genres;
    })
    .catch(error => console.log(error));

  fetchFilmsTrends(page);
}
