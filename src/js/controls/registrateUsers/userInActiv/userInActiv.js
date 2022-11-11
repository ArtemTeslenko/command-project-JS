import { setVerifyToken, getUsersessionData } from '../index';
import { onAuthStateChanged } from 'firebase/auth';

import { auth } from '../fireBaseIndex';

export let currentToken = '';
onAuthStateChanged(auth, user => {
  if (user) {
    // console.log(user);
    currentToken = user.accessToken;
    setVerifyToken(user.accessToken, user.uid);
    getUsersessionData();
  } else {
    console.log(
      'Не удалось получить данные позьлователя. Авторизйутесь еще раз.'
    );
  }
});

// // Получение ID  пользователя для записи in BD
// export function veryfiUserId(movieData, category) {
//   onAuthStateChanged(auth, user => {
//     if (user) {
//       // writeUserData(movieData, user.uid, category);
//     } else {
//       console.log(
//         'Не удалось получить данные позьлователя. Авторизйутесь еще раз.'
//       );
//     }
//   });
// }
