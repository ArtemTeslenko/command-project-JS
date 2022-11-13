import { renderTrailer } from '../render';

export function trailerRequest(data) {
  fetch(
    `https://api.themoviedb.org/3/movie/${data.id}/videos?api_key=f77dc2e97892acd31d02803b220513f2&language=en-US`
  )
    .then(res => res.json())
    .then(data => {
      const results = data.results.map(result => result.key);
      renderTrailer(results[0]);
      //console.log(results[0]);
    });
}
