import { refs } from '../../../reference/homeRefs';

export function listenerBack() {
  refs.logIn.addEventListener('click', openCloseFormUsers);
  refs.btnCloseForm.addEventListener('click', openCloseFormUsers);
  refs.btnRegUser.addEventListener('click', reRenderForm);
}

function reRenderForm(e) {
  e.preventDefault();

  if (e.target.textContent === 'Register') {
    return renderRegForm();
  }
  return renderAuthForm();
}

function renderRegForm() {
  refs.titelForm.textContent = 'Registration';
  refs.btnSubmit.textContent = 'Register';
  refs.titleQuestionUser.textContent = 'Do have an account?';
  refs.btnRegUser.textContent = 'Auth';
}

function renderAuthForm() {
  refs.titelForm.textContent = 'Login';
  refs.btnSubmit.textContent = 'LogIn';
  refs.titleQuestionUser.textContent = 'Do`t have an account?';
  refs.btnRegUser.textContent = 'Register';
}

function openCloseFormUsers(e) {
  e.preventDefault();
  refs.backdropAuth.classList.toggle('is-hidden');
}

export function openCloseFormUsersOnAuth() {
  refs.backdropAuth.classList.add('is-hidden');
}
