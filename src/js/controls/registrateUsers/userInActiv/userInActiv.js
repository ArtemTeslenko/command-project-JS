import { auth, setVerifyToken, getUsersessionData } from '../index';
import { writeUserData } from '../../data/sdc';
import { onAuthStateChanged } from 'firebase/auth';

export let currentToken = '';

// export function veryfiUser() {
onAuthStateChanged(auth, user => {
  if (user) {
    console.log(user);
    currentToken = user.accessToken;
    // return user;
    setVerifyToken(user.accessToken, user.uid);
    getUsersessionData();
  } else {
    console.log(
      'Не удалось получить данные позьлователя. Авторизйутесь еще раз.'
    );
  }
});
// }

// Получение ID  пользователя для записи in BD
export function veryfiUserId(movieData, category) {
  onAuthStateChanged(auth, user => {
    if (user) {
      writeUserData(movieData, user.uid, category);
    } else {
      console.log(
        'Не удалось получить данные позьлователя. Авторизйутесь еще раз.'
      );
    }
  });
}
