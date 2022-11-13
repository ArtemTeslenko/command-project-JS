import { refs } from '../reference/homeRefs';
import { refs } from '../reference/libraryRefs';
import { fetchFilmId } from '../requests';
import { markupBtnModalFilm } from '../markup';
import { addToLokalStorage, addFilmProfail, funcHuianc } from '../controls';
import { checkoutBtnModalFilm } from '../customFunction';

let film = {};

export async function renderFilmCard(id) {
  refs.modalSpinnerEl.classList.remove('is-hidden');
  await fetchFilmId(id).then(respons => {
    film = respons;
    refs.modalSpinnerEl.classList.add('is-hidden');
    return film;
  });

  addToLokalStorage(film);

  const marcup = markupBtnModalFilm(film);
  refs.modalCardEl.innerHTML = marcup;
  // Првоеряет есть ли фильм в добавленых
  checkoutBtnModalFilm(film);

  // Вызывает функцию для поска кнопод для добавления фильмов в просмотренные
  // путь controls --> data --> addFilmUsers
  funcHuianc();
  return addFilmProfail(film);
}

export function cleanModal() {
  refs.modalCardEl.innerHTML = '';
  //return (modalCardEl.innerHTML = '');
}
