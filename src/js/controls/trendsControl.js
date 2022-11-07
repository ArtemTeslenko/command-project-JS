//import { fetchFilmsTrends } from '../requests';
import { refs } from '../reference/homeRefs';
import { fetchGenreId } from '../requests';
import { filmsTrendRender } from '../render/filmsTrendRender';
import { fetchFilms } from '../requests/fetchFilmsTrends';
import { cleanRender } from '../customFunction/functionCleanRender';
import { paginationRender } from '../customFunction/pagination';

export let genreIdArr = [];

//-----------
//-----------
export function trendsControls() {
  let page = 1;

  fetchGenreId()
    .then(genreId => {
      genreIdArr = genreId.genres;
    })
    .catch(error => console.log(error));

  //----------
  function fetchMovies(page) {
    fetchFilms(page, 'movie', 'week').then(data => {
      const destinationEl = refs.galleryEl;

      filmsTrendRender(data, destinationEl);
      let totalPage = data.total_pages;

      if (totalPage > 1) {
        const renderedPagination = paginationRender(
          Number(data.total_pages),
          Number(data.page),
          'movie',
          'week'
        );
        refs.paginationEl.innerHTML = renderedPagination;
      }
    });
  }
  //----------
  refs.paginationEl.addEventListener('click', e => {
    e.preventDefault();
    cleanRender(refs.galleryEl);
    console.log('e', e.target.dataset.page);
    fetchMovies(e.target.dataset.page);
  });

  fetchMovies(page);
} // не трогать
