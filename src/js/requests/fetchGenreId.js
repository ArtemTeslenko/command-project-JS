// export function fetchGenreId() {
//   return fetch(
//     'https://api.themoviedb.org/3/genre/movie/list?api_key=894ef72300682f1db325dae2afe3e7e2&language=en-US'
//   ).then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }

//     return response.json();
//   });
// }
export async function fetchGenreId() {
  const response = await fetch(
    'https://api.themoviedb.org/3/genre/movie/list?api_key=894ef72300682f1db325dae2afe3e7e2&language=en-US'
  );
  if (!response.ok) {
    throw new Error(response.status);
  }
  return await response.json();
}

// export default function fetchGenreId() {
//   return fetch(
//     'https://api.themoviedb.org/3/genre/movie/list?api_key=894ef72300682f1db325dae2afe3e7e2&language=en-US'
//   ).then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }

//     return response.json();
//   });
// }
