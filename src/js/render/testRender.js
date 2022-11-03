import { markupTrending } from '../markup';

const mainEl = document.querySelector('main');

export function testRender(data) {
  return data.results.map(item =>
    mainEl.insertAdjacentHTML('beforeend', markupTrending(item.poster_path))
  );
}
