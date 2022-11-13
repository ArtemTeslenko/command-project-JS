export function rerendeBtnModalFilm(dataFilms, currentFilm, btnW, btnQ) {
  for (const film in dataFilms.watched) {
    if (currentFilm.title === film) {
      btnW.textContent = 'REMOVE FROM WATCH';
    }
  }

  for (const film in dataFilms.queue) {
    if (currentFilm.title === film) {
      btnQ.textContent = 'REMOVE FROM QUEUE';
    }
  }
}
