import { auth, setVerifyToken, getUsersessionData } from '../index';
import { onAuthStateChanged } from 'firebase/auth';

export let currentToken = '';

export function veryfiUser() {
  onAuthStateChanged(auth, user => {
    if (user) {
      currentToken = user.accessToken;
      setVerifyToken(user.accessToken, user.uid);
      getUsersessionData();
    } else {
      console.log(
        'Не удалось получить данные позьлователя. Авторизйутесь еще раз.'
      );
    }
  });
}
