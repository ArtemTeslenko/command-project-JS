//import { fetchFilmsTrends } from '../requests';
import { refs } from '../reference/homeRefs';
import { fetchGenreId } from '../requests';
import { filmsTrendRender } from '../render/filmsTrendRender';
import { fetchFilms } from '../requests/fetchFilmsTrends';
import { cleanRender } from '../customFunction/functionCleanRender';
// import { paginationRender } from '../customFunction/paginationL';
// import { paginationArrowHidden } from '../customFunction/paginationArrowHidden';
import { paginationControl } from '../customFunction/paginationControls';

export let genreIdArr = [];
//gggggg
export function onClickGanna(e) {
  console.log('in Ganna');
  e.preventDefault();
  cleanRender(refs.galleryEl);
  fetchMovies(e.target.dataset.page);
}
function fetchMovies(page) {
  cleanRender(refs.galleryEl);
  const trendUrl =
    'https://api.themoviedb.org/3/trending/movie/week?api_key=894ef72300682f1db325dae2afe3e7e2&page=';
  fetchFilms(page, trendUrl).then(data => {
    const destinationEl = refs.galleryEl;

    filmsTrendRender(data, destinationEl);
    let totalPage = data.total_pages;
    // ------ V copie
    if (totalPage > 1) {
      paginationControl(
        Number(data.total_pages), // total page
        Number(data.page), // current page
        trendUrl, // big part of url);
        refs.paginationEl,
        onClickGanna
      );
    }
    // ------ end of V copie
  });
}
//gggggggggg
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

      //----------

      // refs.paginationEl.addEventListener('click', e => {
      //   e.preventDefault();
      //   //cleanRender(refs.galleryEl);
      //   fetchMovies(e.target.dataset.page);
      // });
    } catch (e) {
      console.log(e);
    }
  }
  mainFunctionCode();
}
