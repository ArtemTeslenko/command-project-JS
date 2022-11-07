import { buildUrl } from '../requests';
import { paginationBtnHidden } from './paginationBtnHidden';
export function paginationRender(
  totalPages,
  currentPage,
  mediaType,
  time_window
) {
  let paginationArrBtn = [];
  let paginationArrAtr = [];
  let paginationLinks = '';

  // ----- 1 Ver
  if (currentPage <= 6) {
    for (let i = 1; i <= 7; i++) {
      paginationArrBtn.push(i);
      paginationArrAtr.push(i);
    }
    paginationArrBtn.push('...');
    paginationArrAtr.push(8);
    paginationArrBtn.push(totalPages);
    paginationArrAtr.push(totalPages);
    paginationBtnHidden(currentPage, totalPages);
  }
  // --- 2 Ver
  if (currentPage > 6 && currentPage < totalPages - 5) {
    paginationArrBtn.push(1);
    paginationArrAtr.push(1);
    paginationArrBtn.push('...');
    paginationArrAtr.push(currentPage - 3);
    for (let i = currentPage - 2; i <= currentPage + 2; i++) {
      paginationArrBtn.push(i);
      paginationArrAtr.push(i);
    }
    paginationArrBtn.push('...');
    paginationArrAtr.push(currentPage + 3);

    paginationArrBtn.push(totalPages);
    paginationArrAtr.push(totalPages);
    paginationBtnHidden(currentPage, totalPages);
  }

  // ---- 3 Ver
  if (currentPage >= totalPages - 5) {
    paginationArrBtn.push(1);
    paginationArrAtr.push(1);
    paginationArrBtn.push('...');
    paginationArrAtr.push(totalPages - 7);
    for (let i = -6; i <= 0; i++) {
      paginationArrBtn.push(totalPages + i);
      paginationArrAtr.push(totalPages + i);
      paginationBtnHidden(currentPage, totalPages);
    }
  }

  let itemClass = 0;
  paginationArrBtn.forEach(pageNumber => {
    itemClass += 1;

    let activeClass =
      pageNumber === currentPage ? 'pagination__item--active' : '';

    paginationLinks =
      paginationLinks +
      `<li class="pagination__item item${itemClass}"><a data-page="${
        paginationArrAtr[itemClass - 1]
      }" href="${buildUrl(
        paginationArrAtr[itemClass - 1],
        mediaType,
        time_window
      )}" class="link pagination__link ${activeClass} ">${pageNumber}</a></li>`;
  });
  return `<button class="btn--decrement" data-page="${
    currentPage - 1
  }" type="button" >
    <svg data-page="${
      currentPage - 1
    }" class="pagination__icon"  width="16" height="16">
     <use href="./images/icons.svg#icon-arrow-left"></use>
    </svg>
  </button>
        <div class="pagination__wrap">
        <ul class="pagination__list list">
        ${paginationLinks} </ul>
        </div>
        
        <button class="btn--increment" data-page="${
          currentPage + 1
        }" type="button" >
    <svg class="pagination__icon" data-page="${
      currentPage + 1
    } "width="16" height="16">
      <use href="./images/icons.svg#icon-arrow-right"></use>
    </svg>
  </button>`;
}
