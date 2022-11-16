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
function getVals() {
  // Get slider values
  //var parent = this.parentNode;
  const slides = document.querySelectorAll('.filter__input');
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
//object.addEventListener("load", myScript);

// window.onload = function () {
//   // Initialize Sliders
//   const sliderSections = document.getElementsByClassName('input-year');
//   console.log(sliderSections);
//   for (var x = 0; x < sliderSections.length; x++) {
//     console.log(sliderSections[x]);
//     let sliders = sliderSections[x].getElementsByTagName('input'); //
//     for (var y = 0; y < sliders.length; y++) {
//       if (sliders[y].type === 'range') {
//         sliders[y].oninput = getVals;
//         // Manually trigger event first time to display values
//         sliders[y].oninput();
//       }
//     }
//   }
// };
window.onload = function () {
  // Initialize Sliders
  const sliderSections = document.getElementsByClassName('input-year');
  console.log(sliderSections);

  let sliders = document.querySelectorAll('.filter__input'); //
  for (var y = 0; y < sliders.length; y++) {
    if (sliders[y].type === 'range') {
      sliders[y].oninput = getVals;
      // Manually trigger event first time to display values
      sliders[y].oninput();
    }
  }
};
