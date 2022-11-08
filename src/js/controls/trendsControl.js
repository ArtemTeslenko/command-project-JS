//import { fetchFilmsTrends } from '../requests';
import { refs } from '../reference/homeRefs';
import { fetchGenreId } from '../requests';
import { filmsTrendRender } from '../render/filmsTrendRender';
import { fetchFilms } from '../requests/fetchFilmsTrends';
import { cleanRender } from '../customFunction/functionCleanRender';
import { paginationRender } from '../customFunction/pagination';
import { paginationArrowHidden } from '../customFunction/paginationArrowHidden';

export let genreIdArr = [];

export function trendsControls() {
  let page = 1;
  async function mainFunctionCode() {
    try {
      await fetchGenreId()
        .then(genreId => {
          genreIdArr = genreId.genres;
        })
        .catch(error => console.log(error));
      fetchMovies(page);

      function fetchMovies(page) {
        const trendUrl =
          'https://api.themoviedb.org/3/trending/movie/week?api_key=894ef72300682f1db325dae2afe3e7e2&page=';
        fetchFilms(page, trendUrl).then(data => {
          const destinationEl = refs.galleryEl;

          filmsTrendRender(data, destinationEl);
          let totalPage = data.total_pages;

          if (totalPage > 1) {
            const renderedPagination = paginationRender(
              Number(data.total_pages),
              Number(data.page),
              trendUrl
            );
            refs.paginationEl.innerHTML = renderedPagination;
            paginationArrowHidden(data.page, data.total_pages);
          }
        });
      }
      //----------
      refs.paginationEl.addEventListener('click', e => {
        e.preventDefault();
        cleanRender(refs.galleryEl);

        fetchMovies(e.target.dataset.page);
      });
    } catch (e) {
      console.log(e);
    }
  }
  mainFunctionCode();
}
