export const refs = {
  bodyEl: document.querySelector('body'),
  mainEl: document.querySelector('main'),
  logoEl: document.querySelector('.header-logo'),
  backdropEl: document.querySelector('.backdrop'),
  buttonCloseEl: document.querySelector('.modal__button'),
  bodyNoScrollEl: document.querySelector('[data-nonScroll]'),
  searchMovieEl: document.querySelector('.search-form'),
  modalCardEl: document.querySelector('.modal-card'),
  modalCardImg: document.querySelector('.modal-card__img'),
  modalSpinnerEl: document.querySelector('.modal-spinner'),

  // modal authUser
  logIn: document.querySelector('#logIn'),
  logOut: document.querySelector('#logOut'),
  btnNotAuth: document.querySelector('.btnNotAuth'),
  btnAuth: document.querySelectorAll('.btnAuth'),
  btnCloseForm: document.querySelector('.form-auth__btn-close'),
  backdropAuth: document.querySelector('.backdrop-auth-user'),

  titelForm: document.querySelector('.form-auth__title'),
  lablePassword: document.querySelector('input[name="pass"]'),
  labelEmail: document.querySelector('input[name="email"]'),
  titleQuestionUser: document.querySelector('.title-question-user'),

  formAuth: document.querySelector('.form-auth__form-login'),
  btnSubmit: document.querySelector('.form-auth__btn-submit'),
  btnRegUser: document.querySelector('.form-auth__button-reg'),

  //------ Ganna K ------
  galleryEl: document.querySelector('.films-gallery'),
  paginationEl: document.querySelector('.pagination'),
  paginationSearchEl: document.querySelector('.pagination-search'),
  spinerHomeGalleryEl: document.querySelector('.film-gallery__overlay'),

  //---------
  scrollBtnEl: document.querySelector('.arrow-up'),
  filmCardLinkEl: document.querySelector('.film-card__link'),
  filmsGalleryEl: document.querySelector('.films-gallery'),
  footerBtn: document.querySelector('.footer__btn'),
  //-----filter
  openFilterBtn: document.querySelector('.filter_open_btn'),
  closeFilterBtn: document.querySelector('.filter_close_btn'),
  filterEl: document.querySelector('.filter'),
  sliders: document.querySelectorAll('.filter__input'),
  //displayRangeValues: document.querySelector('.rangeValues'),
  displayMinYear: document.querySelector('.year-min'),
  displayMaxYear: document.querySelector('.year-max'),
  filterSubmitBtn: document.querySelector('.filter__submit'),
  filterFormEl: document.querySelector('.filter-form'),
};
