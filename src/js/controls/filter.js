import { KEY, BASEURLFILTER } from '../requests';
import { refs } from '../reference/homeRefs';
import Notiflix from 'notiflix';
import { filmsTrendRender } from '../render';
import { fetchFilms } from '../requests';
//import { cleanRender } from '../customFunction';
//import { paginationControl } from '../customFunction';
import {
  openSpinnerHome,
  closeSpinnerHome,
  paginationControl,
  cleanRender,
} from '../customFunction';
import { onClickTrend, onClickSearch } from '../controls';

let filterUrl;

export function onFilterBtnClick() {
  refs.openFilterBtn.addEventListener('click', onToggleFilter);
}
refs.closeFilterBtn.addEventListener('click', offToggleFilter);
// open filter
function onToggleFilter() {
  refs.filterEl.classList.toggle('is-hidden');
}
// close filter
function offToggleFilter() {
  let checkboxes = document.querySelectorAll('input[name="genre"]:checked');
  checkboxes.forEach(checkbox => {
    checkbox.checked = false;
  });
  const date = new Date();
  refs.sliders[0].value = refs.sliders[0].min;

  refs.sliders[1].value = date.getFullYear();

  getVals();
  refs.filterEl.classList.toggle('is-hidden');
}

//const currentYear = date.getFullYear();

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
window.onload = rangeChange();
function rangeChange() {
  // Initialize Sliders

  for (let y = 0; y < refs.sliders.length; y++) {
    if (refs.sliders[y].type === 'range') {
      const date = new Date();
      refs.sliders[y].max = date.getFullYear();
      refs.sliders[1].value = date.getFullYear();
      refs.sliders[y].oninput = getVals;
      // Manually trigger event first time to display values
      refs.sliders[y].oninput();
    }
  }
}
// --------это поиск?
export function onClickFilter(e) {
  e.preventDefault();
  filterMain(e.target.dataset.page);
}

refs.filterFormEl.addEventListener('submit', onFilterSubmitBtn);

function onFilterSubmitBtn(evt) {
  evt.preventDefault();
  refs.paginationEl.innerHTML = '';
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

  filterUrl = `${BASEURLFILTER}?api_key=${KEY}&primary_release_date.gte=${minYear}&primary_release_date.lte=${maxYear}${genrePartUrl}&page=`;

  filterMain();
  offToggleFilter();
}

function filterMain(page) {
  cleanRender(refs.galleryEl);
  fetchFilms(page, filterUrl)
    .then(data => {
      const destinationEl = refs.galleryEl;
      filmsTrendRender(data, destinationEl);

      let totalPage = data.total_pages;
      if (totalPage === 0) {
        Notiflix.Report.failure(
          'UPS',
          'Thre is no films matching your criteria. Please, change the filter!',
          'Okay',
          {
            backOverlayClickToClose: true,
            width: '420px',
            messageFontSize: '16px',
            titleFontSize: '20px',
          }
        );
      }
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
