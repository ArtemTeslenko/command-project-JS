// import { fetchTrending } from './requests';

import { onClick } from './modal';
import { trendsControls } from './controls';

export function renderAll() {
  // fetchTrending();
  onClick();
  trendsControls();
}

// export default function getGenreName(genre_ids) {
//   let genreName = [];
//   genre_ids.forEach(genre_id => {
//     console.log('ku', genreIdArr);
//     genreName.push(genreIdArr.find(genre => genre.id === genre_id).name);
//   });
//   return genreName;
// }
