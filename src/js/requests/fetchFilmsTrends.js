import { filmsTrendRender } from '../render/filmsTrendRender';
const BASEURL = 'https://api.themoviedb.org/3/trending/';
const keyApi = '894ef72300682f1db325dae2afe3e7e2';

export function fetchFilmsTrends(page) {
  return fetch(`${BASEURL}movie/week?api_key=${keyApi}&page=${page}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => filmsTrendRender(data));
}
