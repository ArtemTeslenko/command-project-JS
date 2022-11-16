import { KEY, BASEURLTRAILER } from './commonKey&Url';
import { renderTrailer } from '../render';

export function trailerRequest(e) {
  e.preventDefault();
  fetch(
    `${BASEURLTRAILER}${e.currentTarget.id}/videos?api_key=${KEY}&language=en-US`
  )
    .then(res => res.json())
    .then(data => {
      renderTrailer(data.results[0].key);
    });
}
