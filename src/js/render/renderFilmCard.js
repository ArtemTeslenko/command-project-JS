import { refs } from '../reference/homeRefs';
import { refs } from '../reference/libraryRefs';
import { fetchFilmId } from '../requests';
import { markupBtnModalFilm } from '../markup';
import { addToLokalStorage, addFilmProfail } from '../controls';

let film = {};

export async function renderFilmCard(id) {
  await fetchFilmId(id).then(respons => {
    film = respons;
    return film;
  });

  addToLokalStorage(film);

  const marcup = markupBtnModalFilm(film);
  refs.modalCardEl.innerHTML = marcup;
  // Вызывает функцию для поска кнопод для добавления фильмов в просмотренные
  // путь controls --> data --> addFilmUsers
  return addFilmProfail(film);
}
