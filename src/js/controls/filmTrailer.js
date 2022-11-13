import { refs } from '../reference/homeRefs';

function generateUrl(path) {
  const url = `https://api.themoviedb.org/3${path}?api_key=f77dc2e97892acd31d02803b220513f2&language=en-US`;
}

function fetchVideo() {
  fetch(
    `https://api.themoviedb.org/3/movie/videos?api_key=f77dc2e97892acd31d02803b220513f2&language=en-US`
  )
    .then(res => res.json())
    .then(data => renderMovie);
}
refs.imgModalEl.addEventListener('click', onImgClick);

function onImgClick(e) {
  e.preventDefault();
  console.log(e);
  const target = e.target;
  if (target.tagName.toLowerCase() === imgModalEl) {
    const movieId = target.dataset.movieId;
    console.log(movieId);
    const path = `/movie/${movie_id}/videos`;
    const url = generateUrl(path);
  }
}

const movieElement = document.createElement('div');

function renderMovie(key) {
  movieElement.innerHTML = `<iframe src="https://www.youtube.com/embed/${key}" width="700" height="400"</iframe>`;
}
