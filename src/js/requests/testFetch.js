import { testRender } from '../render';

export function fetchTrending() {
  fetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=45074c10b8f2ea3914a60876b2d17a1a&page=1`
  )
    .then(response => response.json())
    .then(data => testRender(data));
}
