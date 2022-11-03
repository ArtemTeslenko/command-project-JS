import { testRender } from '../render';

const API_KEY = '45074c10b8f2ea3914a60876b2d17a1a';

export function fetchTrending() {
  fetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&page=1`
  )
    .then(response => response.json())
    .then(data => testRender(data));
}
