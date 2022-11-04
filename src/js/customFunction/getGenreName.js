import { genreIdArr } from '../controls/trendsControl';

export function getGenreName(genre_ids) {
  console.log('aaa', genreIdArr);
  let genreName = [];
  genre_ids.forEach(genre_id => {
    console.log('ku', genreIdArr);
    genreName.push(genreIdArr.find(genre => genre.id === genre_id).name);
  });
  return genreName;
}
