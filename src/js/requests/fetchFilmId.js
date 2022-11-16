import { KEY, BASEURLFILMID } from './commonKey&Url';

// запит на картку фільму по id
export function fetchFilmId(movie_id) {
  const arrFilms = fetch(`${BASEURLFILMID}/movie/${movie_id}?api_key=${KEY}`);
  return arrFilms.then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
