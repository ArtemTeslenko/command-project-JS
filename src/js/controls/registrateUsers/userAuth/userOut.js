import { signOut } from 'firebase/auth';
import { refs } from '../../../reference/homeRefs';
import { auth, renderBtnAuth } from '../index';
import Notiflix from 'notiflix';

export function listenerUserOut() {
  refs.logOut.addEventListener('click', userOut);
}

// ========== OutUser ============
export function userOut(e) {
  e.preventDefault();

  localStorage.clear();

  signOut(auth)
    .then(() => {
      renderBtnAuth();
      Notiflix.Notify.warning('Logout done!!!', {
        position: 'center-top',
      });
      // console.log('Выход из аккаунта выполнен!!!');
    })
    .catch(error => {
      Notiflix.Notify.failure('Logout error', {
        position: 'center-top',
      });
      // console.log('Logout error');
      // console.log(error);
    });
}
