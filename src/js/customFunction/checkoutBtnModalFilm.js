import { getDatabase, ref, set, child, get, update } from 'firebase/database';
import {
  app,
  auth,
} from '../controls/registrateUsers/fireBaseIndex/firebaseIndex';
import { onAuthStateChanged } from 'firebase/auth';
import { rerendeBtnModalFilm } from '../markup';

// меняет кнопку в моdалке если есть фильм
export function checkoutBtnModalFilm(currentFilm) {
  const btnWathed = document.querySelector('.button-add__watched');
  const btnQueue = document.querySelector('.button-add__queue');

  onAuthStateChanged(auth, user => {
    if (user) {
      const dbRef = ref(getDatabase(app));

      get(child(dbRef, `users/${user.uid}`))
        .then(snapshot => {
          if (snapshot.exists()) {
            rerendeBtnModalFilm(
              snapshot.val(),
              currentFilm,
              btnWathed,
              btnQueue
            );
          } else {
          }
        })
        .catch(error => {});
    } else {
      //   console.log(
      //     'Не удалось получить данные позьлователя. Авторизйутесь еще раз.'
      //   );
    }
  });
}
//qwe
