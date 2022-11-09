import { paginationRenderL } from './paginationL';
import { paginationRenderSmall } from './paginationSmall';
import { refs } from '../reference/homeRefs';
import { paginationArrowHidden } from './paginationArrowHidden';
import { paginationRenderMobile } from './paginationMobile';

export function paginationControl(totalPage, currentPage, trendUrl) {
  console.log(totalPage);
  if (screen.width >= 768) {
    console.log('big screen');
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
      console.log('big screen 2 pag');
      const renderedPagination = paginationRenderSmall(
        Number(totalPage), // total page
        Number(currentPage), // current page
        trendUrl // big part of url
      );
      refs.paginationEl.innerHTML = renderedPagination;
      paginationArrowHidden(currentPage, totalPage);
    }
  } else {
    console.log('in controls');
    const renderedPagination = paginationRenderMobile(
      Number(totalPage), // total page
      Number(currentPage), // current page
      trendUrl // big part of url);
    );
    refs.paginationEl.innerHTML = renderedPagination;
    paginationArrowHidden(currentPage, totalPage);
  }
}
