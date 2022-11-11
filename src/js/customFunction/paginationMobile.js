import { buildUrl } from '../requests';

export function paginationRenderMobile(
  totalPages,
  currentPage,
  trendUrl,
  
) {
  let paginationArrBtn = [];
  let paginationArrAtr = [];
  let paginationLinks = '';
  // ------ 0 Ver
  if (totalPages <= 5) {
    for (let i = 1; i <= totalPages; i++) {
      paginationArrBtn.push(i);
      paginationArrAtr.push(i);
    }
  } else {
    // ----- 1 Ver
    if (currentPage < 5) {
      for (let i = 1; i <= 5; i++) {
        paginationArrBtn.push(i);
        paginationArrAtr.push(i);
      }

      //paginationBtnHidden(currentPage, totalPages);
    }
    // --- 2 Ver
    if (currentPage >= 5 && currentPage < totalPages - 4) {
      for (let i = currentPage - 2; i <= currentPage + 2; i++) {
        paginationArrBtn.push(i);
        paginationArrAtr.push(i);
      }

      //paginationBtnHidden(currentPage, totalPages);
    }

    // ---- 3 Ver
    if (currentPage >= totalPages - 4) {
      for (let i = -4; i <= 0; i++) {
        paginationArrBtn.push(totalPages + i);
        paginationArrAtr.push(totalPages + i);
        //paginationBtnHidden(currentPage, totalPages);
      }
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
        trendUrl
      )}" class="link pagination__link ${activeClass} ">${pageNumber}</a></li>`;
  });
  const arrowLeft = require(`../../images/arrow-left.svg`);
  const arrowRight = require(`../../images/arrow-right.svg`);
  return `<button class="btn__pagination btn--decrement" data-page="${
    currentPage - 1
  }" 
  type="button"><img src="${arrowLeft}" data-page="${currentPage - 1}" 
  class="pagination__icon "  width="20" height="20"
      alt="selectedItem"></button>
        <div class="pagination__wrap">
        <ul class="pagination__list list">
        ${paginationLinks} </ul>
        </div>
         <button class="btn__pagination btn--increment" data-page="${
           currentPage + 1
         }"  type="button" >
    <img src="${arrowRight}" class="pagination__icon " data-page="${
    currentPage + 1
  } "width="20" height="20"></button>`;
}
