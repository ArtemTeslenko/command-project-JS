import Notiflix from 'notiflix';
import { refs } from '../reference/homeRefs';
import { onClickFilter } from '../controls'; //Ganna filter
import {
  paginationControl,
  openSpinnerHome,
  closeSpinnerHome,
} from '../customFunction';
import { filmsTrendRender } from '../render';
import { fetchFilms } from '../requests';
import { onClickTrend, trendsControls } from '../controls';

const keyApi = '894ef72300682f1db325dae2afe3e7e2';
const textNotify =
  'Search result not successful. Enter the correct movie name and try again';
const textNotifySecond = 'Please, fill the search field';
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

  // refs.galleryEl.innerHTML = '';
  refs.paginationEl.innerHTML = '';

  movieName = refs.searchMovieEl[0].value;
  movieNameSubmit = refs.searchMovieEl[1].value;

  if (
    refs.searchMovieEl[0].value === '' ||
    refs.searchMovieEl[0].value.trim() === ''
  ) {
    Notiflix.Notify.failure(`${textNotifySecond}`, {
      position: 'center-top',
    });
    trendsControls();
    refs.searchMovieEl[0].value = '';
  } else {
    movieNameSubmit = movieName;
    trendUrl = `https://api.themoviedb.org/3/search/movie?api_key=${keyApi}&query=${movieNameSubmit}&page=`;
    mainSearch();
  }
}

// -----Функция вызова слушателя кнопок и ссылок пагинации-----

export function onClickSearch(e) {
  e.preventDefault();
  mainSearch(e.target.dataset.page);
}
// -----Основная функция поиска фильмов и рендера фильмов и кнопок(ссылок) пагинации-----

function mainSearch(page) {
  refs.paginationEl.removeEventListener('click', onClickTrend);
  refs.paginationEl.removeEventListener('click', onClickFilter); //Ganna for filter
  openSpinnerHome();

  refs.galleryEl.innerHTML = '';
  fetchFilms(page, trendUrl)
    .then(data => {
      if (data.results.length === 0) {
        Notiflix.Notify.failure(`${textNotify}`, {
          position: 'center-top',
        });
      } else {
        const destinationEl = refs.galleryEl;
        filmsTrendRender(data, destinationEl);
        // closeSpinnerHome();
        let totalPage = data.total_pages;
        if (totalPage > 1) {
          paginationControl(
            Number(data.total_pages),
            Number(data.page),
            trendUrl,
            onClickSearch //refs.paginationSearchEl
          );
        }
      }
    })
    .catch(err => {
      console.log(err);
      // closeSpinnerHome();
    })
    .finally(() => closeSpinnerHome());
}
