import { auth, veryfiUser, getUsersessionData } from '../index';
import { refs } from '../../../reference/homeRefs';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

// ======= RegUser ========
export function listenerBackFBAuth() {
  refs.formAuth.addEventListener('submit', handleSubmit);
}

export function handleSubmit(event) {
  event.preventDefault();

  const regData = {
    email: '',
    password: '',
  };

  const login = refs.labelEmail;
  const pass = refs.lablePassword;

  if (login.value === '' || pass.value === '') {
    return console.log('Please fill in all the fields!');
  }

  regData.email = login.value;
  regData.password = pass.value;

  const { email, password } = regData;

  if (refs.btnSubmit.textContent !== 'Register') {
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        // Signed in
        // veryfiUser();
        // getUsersessionData();
        const user = userCredential.user;
        console.log('Вход выполнен');
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
        console.log(errorMessage);
        console.log('Вход не выполнен');
      });
  } else {
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        // Signed in
        const user = userCredential.user;
        console.log('Регистрация успешна');
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        console.log('Ошибка регистрации');
        // ..
      });
  }

  event.currentTarget.reset();
}
