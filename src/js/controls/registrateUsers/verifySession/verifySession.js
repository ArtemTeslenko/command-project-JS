import {
  currentToken,
  renderBtnAuth,
  openCloseFormUsersOnAuth,
  veryfiUser,
} from '../index';

let sessionTokenLocal = '';
// let currentToken = '';
// setVerifyToken();

export function setVerifyToken(accessToken, uid) {
  dataSessionUser = {
    uid: uid,
    token: accessToken,
  };

  // const user = veryfiUser();
  // console.log(user);
  // currentToken = user.accessToken;
  // dataSessionUser.uid = user.uid;
  // dataSessionUser.uid = user.accessToken;
  // console.log(name().json());
  localStorage.setItem('userSession', JSON.stringify(dataSessionUser));
  // getUsersessionData();
}

export function getUsersessionData() {
  const localDataSession = localStorage.getItem('userSession');

  try {
    sessionTokenLocal = JSON.parse(localDataSession).token;

    accessTokenVerification(sessionTokenLocal);
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
  }
}

export function accessTokenVerification(sessionTokenLocal) {
  if (sessionTokenLocal === currentToken && sessionTokenLocal !== '') {
    renderBtnAuth();
    return openCloseFormUsersOnAuth();
  }

  console.log('Пользователь не авторизован, авторизуйтесь заново!!!');
}
