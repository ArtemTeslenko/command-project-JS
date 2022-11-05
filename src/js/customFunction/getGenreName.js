import { genreIdArr } from '../controls/trendsControl';

export function getGenreName(genre_ids) {
  let genreName = [];

  genre_ids.forEach(genre_id => {
    genreName.push(genreIdArr.find(genre => genre.id === genre_id).name);
  });

  if (genreName.length > 2) {
    genreName = genreName.slice(0, 2);
    genreName.push('Other');
  }
  return genreName;
}
