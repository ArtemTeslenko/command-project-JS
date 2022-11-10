import Notiflix from 'notiflix';
import { refs } from '../reference/homeRefs';
import { paginationControl } from '../customFunction/paginationControls';
import { filmsTrendRender } from '../render';
import { fetchFilms } from './fetchFilmsTrends';
import { filmsTrendRender } from '../render';

const keyApi = '894ef72300682f1db325dae2afe3e7e2';
const textNotifly =
  'Search result not successful. Enter the correct movie name and try again';
let movieName;
let movieNameSubmit;
let trendUrl;

// -----Функция вызова слушателя событий на SUBMIT - поиск-----

export function onListenerSearchMovie() {
  refs.searchMovieEl.addEventListener('submit', onSearchSubmitMovie);
}

// -----Функция поиска фильма-----

function onSearchSubmitMovie(event) {
  event.preventDefault();
  refs.galleryEl.innerHTML = '';
  refs.paginationEl.innerHTML = '';
  movieName = refs.searchMovieEl[0].value;
  movieNameSubmit = refs.searchMovieEl[1].value;
  movieNameSubmit = movieName;
  trendUrl = `https://api.themoviedb.org/3/search/movie?api_key=${keyApi}&query=${movieNameSubmit}&page=`;

  mainSearch();
}

// -----Функция вызова слушателя кнопок и ссылок пагинации-----

export function onSearchPagination() {
  refs.paginationSearchEl.addEventListener('click', e => {
    e.preventDefault();
    mainSearch(e.target.dataset.page);
  });
}

// -----Основная функция поиска фильмов и рендера фильмов и кнопок(ссылок) пагинации-----

function mainSearch(page) {
  refs.galleryEl.innerHTML = '';
  fetchFilms(page, trendUrl)
    .then(data => {
      if (data.results.length === 0) {
        Notiflix.Notify.failure(`${textNotifly}`);
      } else {
        const destinationEl = refs.galleryEl;
        filmsTrendRender(data, destinationEl);
        let totalPage = data.total_pages;
        if (totalPage > 1) {
          paginationControl(
            Number(data.total_pages),
            Number(data.page),
            trendUrl,
            refs.paginationSearchEl
          );
        }
      }
    })
    .catch(err => console.log(err));
}
