import { getDatabase, ref, set, child, get, update } from 'firebase/database';
// import { onAuthStateChanged } from 'firebase/auth';
import { conversionArray } from './index';
import { app } from '../registrateUsers/fireBaseIndex/firebaseIndex';

// // add Film Users Profail
// export function writeUserData(dataFilm, uid, category) {
//   // console.log(uid);
//   // conversionArray(dataFilm, getDataUser(uid));
//   const db = getDatabase();
//   set(ref(db, 'users/' + `${uid}/` + `${category}/` + dataFilm.title), dataFilm)
//     .then(() => {
//       console.log('Данные записаны.');
//     })
//     .catch(error => {
//       console.log('Ошибка!!! Данные не записаны.');
//     });
//   getDataUser(dataFilm, uid);
// }

// writeUserData();

function getDataUser(film, userId) {
  const dbRef = ref(getDatabase(app));
  get(child(dbRef, `users/${userId}`))
    .then(snapshot => {
      if (snapshot.exists()) {
        // console.log(snapshot.val().watched);
        console.log(snapshot.val().queue);
      } else {
        console.log('No data available');
      }
    })
    .catch(error => {
      console.log('Ошибка получения данных!!!');
      console.error(error);
    });
}
// getDataUser('j6WI8cy9dXgURkaEW1pPKG8bb8J2');

function writeNewPost(userId, name) {
  const db = getDatabase();

  // A post entry.
  // const postData = {
  // username: name,
  // };

  const updates = {};
  updates['users/' + userId + '/email'] = name;

  return update(ref(db), updates)
    .then(() => {
      console.log('Данные успешно обновлены.');
    })
    .catch(error => {
      console.log('Ошибка обновления данных!!!');
      console.log(error);
    });
}
// writeNewPost('12345', 'vsdg@Gmail.com');
