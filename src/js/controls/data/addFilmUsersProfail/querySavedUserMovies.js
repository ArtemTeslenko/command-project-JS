import { onAuthStateChanged } from 'firebase/auth';
import { getDatabase, ref, set, child, get, update } from 'firebase/database';
import { app } from '../../registrateUsers/fireBaseIndex';
import { auth } from '../../registrateUsers';
import { createLibraryMarkup } from '../../../markup';
import { refs } from '../../../reference/libraryRefs';
import Notiflix from 'notiflix';

export function getSavedUserFilm(type) {
  const dbRef = ref(getDatabase(app));

  if (type === 'queue') {
    return onAuthStateChanged(auth, user => {
      if (user) {
        get(child(dbRef, `users/${user.uid}`))
          .then(snapshot => {
            if (snapshot.exists()) {
              renderFilms(Object.entries(snapshot.val().queue));
            } else {
              refs.libraryEl.innerHTML = 'No movies';
              Notiflix.Notify.failure('No data available', {
                position: 'center-top',
                showOnlyTheLastOne: true,
                clickToClose: true,
              });
            }
          })
          .catch(error => {
            //if (error.message === "can't convert undefined to object") {
            if (refs.libraryEl) {
              refs.libraryEl.innerHTML = 'No movies added to the queue';
            }

            // }
            Notiflix.Notify.failure('Error getting data!!!', {
              position: 'center-top',
              showOnlyTheLastOne: true,
              clickToClose: true,
            });
          });
      } else {
        console.log(
          'Не удалось получить данные позьлователя. Авторизйутесь еще раз.'
        );
      }
    });
  }

  onAuthStateChanged(auth, user => {
    if (user) {
      get(child(dbRef, `users/${user.uid}`))
        .then(snapshot => {
          if (snapshot.exists()) {
            renderFilms(Object.entries(snapshot.val().watched));
          } else {
            Notiflix.Notify.failure('No data available', {
              position: 'center-top',
              showOnlyTheLastOne: true,
              clickToClose: true,
            });
          }
        })
        .catch(error => {
          // if (error.message === "can't convert undefined to object") {
          if (refs.libraryEl) {
            refs.libraryEl.innerHTML = 'No movies added to the watched';
          }
          // }
          Notiflix.Notify.failure('Error getting data!!!', {
            position: 'center-top',
            showOnlyTheLastOne: true,
            clickToClose: true,
          });

          // console.log('Ошибка получения данных!!!');
          // console.error(error);
        });
    } else {
      // console.log(
      // 'Не удалось получить данные позьлователя. Авторизйутесь еще раз.'
      // );
    }
  });
}

function renderFilms(films) {
  const libraryMarkup = createLibraryMarkup(films);
  refs.libraryEl.innerHTML = libraryMarkup;
}
