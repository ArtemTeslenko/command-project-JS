// const refs = {
//  openFilterBtn: document.querySelector('.filter_open_btn'),
//   closeFilterBtn: document.querySelector('.filter_close_btn'),
//   filterEl: document.querySelector('.filter'),
//   body: document.querySelector('body'),
// };

// refs.openFilterBtn.addEventListener('click', toggleMenu);
// refs.closeFilterBtn.addEventListener('click', toggleMenu);

// function toggleFilter() {
//   refs.menu.classList.toggle('is-hidden');
//   //   refs.body.classList.toggle('no-scroll');
// }
const slides = document.querySelectorAll('.filter__input');
const date = new Date();
const currentYear = date.getFullYear();
console.log(currentYear);

// --Принимает данные с инпута i запис в спан выбранный год
function getVals() {
  // Get slider values
  //var parent = this.parentNode;
  //const slides = document.querySelectorAll('.filter__input');
  console.log('slides', slides);
  const slide1 = parseFloat(slides[0].value);
  const slide2 = parseFloat(slides[1].value);
  // Neither slider will clip the other, so make sure we determine which is larger
  if (slide1 > slide2) {
    const tmp = slide2;
    slide2 = slide1;
    slide1 = tmp;
  }

  const displayRangeValues = document.querySelector('.rangeValues'); //[0];
  displayRangeValues.textContent = `${slide1} - ${slide2}`;
}
//-------
// --- слушатель
window.onload = function () {
  // Initialize Sliders
  const sliderSections = document.getElementsByClassName('input-year');

  let sliders = document.querySelectorAll('.filter__input'); //
  console.log(sliders);
  for (var y = 0; y < sliders.length; y++) {
    if (sliders[y].type === 'range') {
      sliders[y].max = currentYear;
      sliders[y].oninput = getVals;
      // Manually trigger event first time to display values
      sliders[y].oninput();
    }
  }
};
// --------

//-----------------------------------------
////object.addEventListener("load", myScript);

// window.onload = function () {
//   // Initialize Sliders
//   const sliderSections = document.getElementsByClassName('input-year');

//   for (var x = 0; x < sliderSections.length; x++) {
//     //     let sliders = sliderSections[x].getElementsByTagName('input'); //
//     let sliders = sliderSections[x].querySelectorAll('.filter__input');
//     for (var y = 0; y < sliders.length; y++) {
//       if (sliders[y].type === 'range') {
//         sliders[y].oninput = getVals;
//         // Manually trigger event first time to display values
//         sliders[y].oninput();
//       }
//     }
//   }
// };
