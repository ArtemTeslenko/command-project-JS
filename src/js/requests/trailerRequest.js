import { renderTrailer } from '../render';

export function trailerRequest(e) {
  fetch(
    `https://api.themoviedb.org/3/movie/${e.currentTarget.id}/videos?api_key=894ef72300682f1db325dae2afe3e7e2&language=en-US`
  )
    .then(res => res.json())
    .then(data => {
      // const results = data.results.map(result => result.key); // to delete
      renderTrailer(data.results[0].key);
    });
}
