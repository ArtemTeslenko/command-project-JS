import { genreIdArr } from '../common';

export function getGenreName(genre_ids) {
  let genreName = [];
  genre_ids.forEach(genre_id => {
    console.log('ku', genreIdArr);
    genreName.push(genreIdArr.find(genre => genre.id === genre_id).name);
  });
  return genreName;
}
