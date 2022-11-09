import { signOut } from 'firebase/auth';
import { refs } from '../../../reference/homeRefs';
import { auth, renderBtnAuth } from '../index';

// const logOutUser = document.querySelector('#logOut');

refs.logOut.addEventListener('click', userOut);

// ========== OutUser ============
export function userOut(e) {
  e.preventDefault();

  localStorage.clear();

  signOut(auth)
    .then(() => {
      renderBtnAuth();
      console.log('Выход из аккаунта выполнен!!!');
    })
    .catch(error => {
      console.log('Выход из аккаунта не выполнен!!!');
      console.log(error);
    });
}
