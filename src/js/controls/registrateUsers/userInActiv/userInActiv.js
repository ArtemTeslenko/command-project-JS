import { setVerifyToken, getUsersessionData } from '../index';
import { onAuthStateChanged } from 'firebase/auth';

import { auth } from '../fireBaseIndex';

export let currentToken = '';
onAuthStateChanged(auth, user => {
  if (user) {
    currentToken = user.accessToken;
    setVerifyToken(user.accessToken, user.uid);
    getUsersessionData();
  } else {
  }
});
