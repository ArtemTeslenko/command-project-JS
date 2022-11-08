import Notiflix from 'notiflix';
import { refs } from '../reference/homeRefs';
import { createFilmMarkup } from '../markup/trendfilmsMarkup';
import { trendsControls } from '../controls/trendsControl';
import { genreIdArr } from '../controls/trendsControl';

const keyApi = '894ef72300682f1db325dae2afe3e7e2';
const textNotifly =
  'Search result not successful. Enter the correct movie name and try again';

let movieName;
let page;

// -----Функция получения данных value из INPUT и присваивание их в переменную movieN-----

function onSearchMovie(event) {
  movieName = event.target.value;
}

refs.searchMovieEl.addEventListener('input', onSearchMovie);

// -----Функция поиска фильма (без страницы)-----

function onSearchSubmitMovie(event) {
  event.preventDefault();
  refs.searchMovieEl[1].value = movieName;
  page = 1;
  fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${keyApi}&query=${movieName}&page=${page}`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error();
      }
      return response.json();
    })
    .then(data => {
      const newMovie = data.results;

      // -----Табличка о том, что фильм не найден, библиотека NOTIFY-----

      if (data.results.length === 0) {
        Notiflix.Notify.failure(`${textNotifly}`);

        // -----Список найденных фильмов и их рендер -----
      } else {
        const markup = createFilmMarkup(newMovie);
        const destinationEl = document.querySelector('.films-gallery');
        destinationEl.innerHTML = markup;
      }
    })
    .catch(err => console.log(err));
}

// -----Вызов функции поиска фильма по ключевому слову при нажатии на SUBMIT-----

refs.searchMovieEl.addEventListener('submit', onSearchSubmitMovie);
