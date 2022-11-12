import {
  currentToken,
  renderBtnAuth,
  openCloseFormUsersOnAuth,
} from '../index';

let sessionTokenLocal = '';

export function setVerifyToken(accessToken, uid) {
  const dataSessionUser = {
    uid: uid,
    token: accessToken,
  };

  localStorage.setItem('userSession', JSON.stringify(dataSessionUser));
}

export function getUsersessionData() {
  const localDataSession = localStorage.getItem('userSession');

  try {
    sessionTokenLocal = JSON.parse(localDataSession).token;

    accessTokenVerification(sessionTokenLocal);
  } catch (error) {
    // console.log(error.name);
    // console.log(error.message);
  }
}

export function accessTokenVerification(sessionTokenLocal) {
  if (sessionTokenLocal === currentToken && sessionTokenLocal !== '') {
    renderBtnAuth();
    return openCloseFormUsersOnAuth();
  }

  // console.log('Пользователь не авторизован, авторизуйтесь заново!!!');
}
