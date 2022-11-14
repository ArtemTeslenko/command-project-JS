import Notiflix from 'notiflix';
import { getDatabase, ref, set } from 'firebase/database';
import { onAuthStateChanged } from 'firebase/auth';

import { auth } from '../../index';
import { refs } from '../../../reference/homeRefs';

export function addFilmProfail(filmData) {
  const btnWached = document.querySelector('.button-add__watched');
  const btnQueue = document.querySelector('.button-add__queue');

  const genres = filmData.genres.map(filmData => filmData.name).join(', ');

  btnWached.addEventListener('click', checkBtn);
  btnQueue.addEventListener('click', checkBtn);

  function checkBtn(e) {
    const localDataSession = localStorage.getItem('userSession');

    if (localDataSession === null) {
      console.log('123');
      // refs.backdropEl.classList.add('is-hidden');
      // refs.backdropAuth.classList.remove('is-hidden');
      Notiflix.Confirm.show(
        'Do you want to save the movie?',
        'You must be logged in to add to the library. Would you like to sign in?',
        'Yes',
        'No',
        function okCb() {
          refs.backdropEl.classList.add('is-hidden');
          refs.backdropAuth.classList.remove('is-hidden');
        },
        function cancelCb() {},
        {
          width: '320px',
          borderRadius: '8px',
        }
      );
    }

    e.preventDefault();
    if (e.target.textContent === 'REMOVE FROM WATCH') {
      onAuthStateChanged(auth, user => {
        console.log(e.target.name);
        console.log(user);
        if (user) {
          const db = getDatabase();
          set(
            ref(
              db,
              'users/' + `${user.uid}/` + `${e.target.name}/` + filmData.title
            ),
            null
          )
            .then(() => {
              Notiflix.Notify.success('Film deleted', {
                position: 'center-top',
              });
              // console.log('Данные записаны.');
            })
            .catch(error => {
              Notiflix.Notify.success(
                'Error!!! Failed to add movie to library.',
                {
                  position: 'center-top',
                }
              );
              // console.log(error);
              // console.log('Ошибка!!! Данные не записаны.');
            });
        } else {
          // console.log(
          //   'Не удалось получить данные позьлователя. Авторизйутесь еще раз.'
          // );
        }
        console.log('not user');
      });

      if (e.target.textContent === 'REMOVE FROM WATCH') {
        e.target.textContent = 'ADD TO WATCHED';
      }
    } else if (e.target.textContent === 'REMOVE FROM QUEUE') {
      onAuthStateChanged(auth, user => {
        if (user) {
          const db = getDatabase();
          set(
            ref(
              db,
              'users/' + `${user.uid}/` + `${e.target.name}/` + filmData.title
            ),
            null
          )
            .then(() => {
              Notiflix.Notify.success('Film deleted', {
                position: 'center-top',
              });
              // console.log('Данные записаны.');
            })
            .catch(error => {
              Notiflix.Notify.success(
                'Error!!! Failed to add movie to library.',
                {
                  position: 'center-top',
                }
              );
              // console.log(error);
              // console.log('Ошибка!!! Данные не записаны.');
            });
        } else {
          // console.log(
          //   'Не удалось получить данные позьлователя. Авторизйутесь еще раз.'
          // );
        }
      });

      if (e.target.textContent === 'REMOVE FROM QUEUE') {
        e.target.textContent = 'ADD TO QUEUE';
      }
    } else {
      collectMovieDataObject(e);
    }
  }
  // Собирает данные филмьа в объект для записи in BD
  function collectMovieDataObject(e) {
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
            Notiflix.Notify.success('Film added to the library', {
              position: 'center-top',
            });
            // console.log('Данные записаны.');
          })
          .catch(error => {
            Notiflix.Notify.success(
              'Error!!! Failed to add movie to library.',
              {
                position: 'center-top',
              }
            );
            // console.log(error);
            // console.log('Ошибка!!! Данные не записаны.');
          });

        if (e.target.textContent === 'ADD TO WATCHED') {
          e.target.textContent = 'REMOVE FROM WATCH';
        } else if (e.target.textContent === 'ADD TO QUEUE') {
          e.target.textContent = 'REMOVE FROM QUEUE';
        }
      } else {
        // console.log(
        //   'Не удалось получить данные позьлователя. Авторизйутесь еще раз.'
        // );
      }
    });
  }
}
