import { paginationRenderL } from './paginationL';
import { paginationRenderSmall } from './paginationSmall';
import { refs } from '../reference/homeRefs';
import { paginationArrowHidden } from './paginationArrowHidden';

export function paginationControl(totalPage, currentPage, trendUrl) {
  if (totalPage > 9) {
    const renderedPagination = paginationRenderL(
      Number(totalPage), // total page
      Number(currentPage), // current page
      trendUrl // big part of url
    );
    refs.paginationEl.innerHTML = renderedPagination;
    paginationArrowHidden(currentPage, totalPage);
  }
  if (totalPage <= 9) {
    console.log('2 pag');
    const renderedPagination = paginationRenderSmall(
      Number(totalPage), // total page
      Number(currentPage), // current page
      trendUrl // big part of url
    );
    refs.paginationEl.innerHTML = renderedPagination;
    paginationArrowHidden(currentPage, totalPage);
  }
}
