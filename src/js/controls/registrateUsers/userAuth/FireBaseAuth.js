import { auth } from '../index';
import { refs } from '../../../reference/homeRefs';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import Notiflix from 'notiflix';

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
    return Notiflix.Notify.warning('Please fill in all the fields!', {
      position: 'center-top',
    });
  }

  regData.email = login.value;
  regData.password = pass.value;

  const { email, password } = regData;

  if (refs.btnSubmit.textContent !== 'Register') {
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const user = userCredential.user;
        Notiflix.Notify.success('Login completed', {
          position: 'center-top',
        });
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // console.log(error);
        // console.log(errorMessage);
        Notiflix.Notify.failure('Account login error!!!', {
          position: 'center-top',
        });
      });
  } else {
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const user = userCredential.user;
        Notiflix.Notify.success('Registration completed successfully', {
          position: 'center-top',
        });
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // console.log(errorCode);
        // console.log(errorMessage);
        if (errorCode === 'auth/weak-password') {
          return Notiflix.Notify.failure(
            `Registration error!!! Password should be at least 6 characters.`,
            {
              position: 'center-top',
            }
          );
        }
        Notiflix.Notify.failure(`Registration error!!!`, {
          position: 'center-top',
        });
      });
  }

  event.currentTarget.reset();
}
