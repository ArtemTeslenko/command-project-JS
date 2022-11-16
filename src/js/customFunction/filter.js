import { refs } from '../reference/homeRefs';
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

const date = new Date();
const currentYear = date.getFullYear();

// --Принимает данные с инпута i запис в спан выбранный год
function getVals() {
  // Get slider values
  //var parent = this.parentNode;
  //const slides = document.querySelectorAll('.filter__input');

  const slider1 = parseFloat(refs.sliders[0].value);
  const slider2 = parseFloat(refs.sliders[1].value);
  // Neither slider will clip the other, so make sure we determine which is larger
  if (slider1 > slider2) {
    const tmp = slider2;
    slider2 = slider1;
    slider1 = tmp;
  }

  // refs.displayRangeValues.textContent = `${slider1} - ${slider2}`;
  refs.displayMinYear.textContent = slider1;
  refs.displayMaxYear.textContent = slider2;
}
//-------
// --- слушатель
window.onload = function () {
  // Initialize Sliders
  refs.sliders[1].value = currentYear;
  // let sliders = document.querySelectorAll('.filter__input'); //
  //console.log(refs.sliders);
  for (var y = 0; y < refs.sliders.length; y++) {
    if (refs.sliders[y].type === 'range') {
      refs.sliders[y].max = currentYear;

      refs.sliders[y].oninput = getVals;
      // Manually trigger event first time to display values
      refs.sliders[y].oninput();
    }
  }
};
// --------это в поиск?
export function inFilters() {
  refs.filterFormEl.addEventListener('submit', onFilterSubmitBtn);
}

function onFilterSubmitBtn(evt) {
  evt.preventDefault();
  const minYear = refs.displayMinYear.textContent;
  const maxYear = refs.displayMaxYear.textContent;
  //   console.dir(evt.target.elements.yearFirst.value);
  //   console.dir(evt.target.elements.yearSec.value);
  kukuku(minYear, maxYear);
  return minYear, maxYear;
}
function kukuku(minYear, maxYear) {
  console.log(minYear, maxYear);
}
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
