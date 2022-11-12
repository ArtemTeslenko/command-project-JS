import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../index';
import { getDatabase, ref, set } from 'firebase/database';

export function addFilmProfail(filmData) {
  const btnWached = document.querySelector('.button-add__watched');
  const btnQueue = document.querySelector('.button-add__queue');

  const genres = filmData.genres.map(filmData => filmData.name).join(', ');

  btnWached.addEventListener('click', collectMovieDataObject);
  btnQueue.addEventListener('click', collectMovieDataObject);

  // Собирает данные филмьа в объект для записи in BD
  function collectMovieDataObject(e) {
    e.preventDefault();

    const movieData = {
      filmId: filmData.id,
      posterPath: filmData.poster_path,
      title: filmData.title,
      voteAverage: filmData.vote_average,
      voteCount: filmData.vote_count,
      popularity: filmData.popularity,
      originalTitle: filmData.original_title,
      genres,
      overview: filmData.overview,
    };

    onAuthStateChanged(auth, user => {
      if (user) {
        const db = getDatabase();
        set(
          ref(
            db,
            'users/' + `${user.uid}/` + `${e.target.name}/` + movieData.title
          ),
          movieData
        )
          .then(() => {
            console.log('Данные записаны.');
          })
          .catch(error => {
            console.log(error);
            console.log('Ошибка!!! Данные не записаны.');
          });
      } else {
        console.log(
          'Не удалось получить данные позьлователя. Авторизйутесь еще раз.'
        );
      }
    });

    // veryfiUserId(movieData, e.target.name);
    // writeUserData(movieData);
  }
}

// export function conversionArray(film, filmsUser) {
//   console.log(filmsUser);
//   if (filmsUser === undefined) {
//     return [film];
//   }
//   return (arrFilms = [film, ...filmsUser]);
// }
