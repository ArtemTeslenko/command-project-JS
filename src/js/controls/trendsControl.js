import { fetchFilmsTrends } from '../requests';
import { fetchGenreId } from '../requests';
import { filmsTrendRender } from '../render/filmsTrendRender';
export let genreIdArr = [];
export function trendsControls() {
  let page = 1;

  fetchGenreId()
    .then(genreId => {
      genreIdArr = genreId.genres;
    })
    .catch(error => console.log(error));
  const uplPart = 'movie/week';
  fetchFilmsTrends(page, uplPart).then(data => {
    const destinationEl = document.querySelector('.films-gallery');
    filmsTrendRender(data, destinationEl);
  });
} //это святое
