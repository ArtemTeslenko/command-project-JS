// const refs = {
//  openFilterBtn: document.querySelector('.filter_open_btn'),
//   closeFilterBtn: document.querySelector('.filter_close_btn'),
//   filterEl: document.querySelector('.filter'),
//   body: document.querySelector('body'),
// };

refs.openFilterBtn.addEventListener('click', toggleMenu);
refs.closeFilterBtn.addEventListener('click', toggleMenu);

function toggleFilter() {
  refs.menu.classList.toggle('is-hidden');
  //   refs.body.classList.toggle('no-scroll');
}
