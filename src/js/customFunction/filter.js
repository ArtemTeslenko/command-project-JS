import { refs } from '../reference/homeRefs';
import { filmsTrendRender } from '../render/filmsTrendRender';
import { fetchFilms } from '../requests/fetchFilmsTrends';
import { cleanRender } from '../customFunction/functionCleanRender';
import { paginationControl } from '../customFunction/paginationControls';
import {
  openSpinnerHome,
  closeSpinnerHome,
} from '../customFunction/spinerHome';
import { onClickTrend } from '../controls';
import { onClickSearch } from '../requests/fetchSearchFilm';
let filterUrl;
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
  let slider1 = parseFloat(refs.sliders[0].value);
  let slider2 = parseFloat(refs.sliders[1].value);
  // Neither slider will clip the other, so make sure we determine which is larger
  if (slider1 > slider2) {
    const tmp = slider2;
    slider2 = slider1;
    slider1 = tmp;
  }

  refs.displayMinYear.textContent = slider1;
  refs.displayMaxYear.textContent = slider2;
}
//-------
// --- слушатель
window.onload = function () {
  // Initialize Sliders

  // let sliders = document.querySelectorAll('.filter__input'); //
  //console.log(refs.sliders);
  for (let y = 0; y < refs.sliders.length; y++) {
    if (refs.sliders[y].type === 'range') {
      refs.sliders[y].max = currentYear;
      refs.sliders[1].value = date.getFullYear();
      refs.sliders[y].oninput = getVals;
      // Manually trigger event first time to display values
      refs.sliders[y].oninput();
    }
  }
};
// --------это поиск?
function onClickFilter(e) {
  e.preventDefault();
  filterMain(e.target.dataset.page);
}

refs.filterFormEl.addEventListener('submit', onFilterSubmitBtn);

function onFilterSubmitBtn(evt) {
  evt.preventDefault();

  refs.paginationEl.removeEventListener('click', onClickTrend);
  refs.paginationEl.removeEventListener('click', onClickSearch);
  // --- Genre
  let checkboxes = document.querySelectorAll('input[name="genre"]:checked');
  let valuesCheckBox = [];
  let genrePartUrl;
  checkboxes.forEach(checkbox => {
    valuesCheckBox.push(checkbox.value);
  });
  if (valuesCheckBox.length) {
    let genres = valuesCheckBox.join(',');

    genrePartUrl = `&with_genres=${genres}`;
  } else {
    genrePartUrl = '';
  }

  // --- Year
  const minYear = refs.displayMinYear.textContent;
  const maxYear = refs.displayMaxYear.textContent;
  //console.dir(evt.target.elements.yearFirst.value);
  //   console.dir(evt.target.elements.yearSec.value);
  cleanRender(refs.galleryEl);
  openSpinnerHome();

  filterUrl = `https://api.themoviedb.org/3/discover/movie?api_key=894ef72300682f1db325dae2afe3e7e2&primary_release_date.gte=${minYear}&primary_release_date.lte=${maxYear}${genrePartUrl}&page=`;

  filterMain();
}

function filterMain(page) {
  cleanRender(refs.galleryEl);
  fetchFilms(page, filterUrl)
    .then(data => {
      const destinationEl = refs.galleryEl;
      filmsTrendRender(data, destinationEl);

      let totalPage = data.total_pages;
      if (totalPage > 1) {
        if (totalPage > 500) {
          totalPage = 500;
        }
        paginationControl(
          Number(totalPage), // total page
          Number(data.page), // current page
          filterUrl, // big part of url);
          onClickFilter
        );
      }
    })
    .catch(err => {
      console.log(err);
      // closeSpinnerHome();
    })
    .finally(() => closeSpinnerHome());
}

//-----------------------------------------
//https://api.themoviedb.org/3/discover/movie?page=1&api_key=894ef72300682f1db325dae2afe3e7e2&primary_release_date.gte=2010&primary_release_date.lte=2015

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
