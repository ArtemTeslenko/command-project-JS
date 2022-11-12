import { buildUrl } from '../requests';
//import { paginationBtnHidden } from './paginationBtnHidden';

export function paginationRenderL(totalPages, currentPage, trendUrl) {
  let paginationArrBtn = [];
  let paginationArrAtr = [];
  let paginationLinks = '';

  // ----- 1 Ver
  // 6
  if (currentPage <= 5) {
    for (let i = 1; i <= 7; i++) {
      paginationArrBtn.push(i);
      paginationArrAtr.push(i);
    }
    paginationArrBtn.push('...');
    paginationArrAtr.push(8);
    paginationArrBtn.push(totalPages);
    paginationArrAtr.push(totalPages);
    //paginationBtnHidden(currentPage, totalPages);
  }
  // --- 2 Ver
  //6,5
  if (currentPage > 5 && currentPage < totalPages - 4) {
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
    //paginationBtnHidden(currentPage, totalPages);
  }

  // ---- 3 Ver
  //5
  if (currentPage >= totalPages - 4) {
    paginationArrBtn.push(1);
    paginationArrAtr.push(1);
    paginationArrBtn.push('...');
    paginationArrAtr.push(totalPages - 7);
    for (let i = -6; i <= 0; i++) {
      paginationArrBtn.push(totalPages + i);
      paginationArrAtr.push(totalPages + i);
      //paginationBtnHidden(currentPage, totalPages);
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
//disabled="false"
