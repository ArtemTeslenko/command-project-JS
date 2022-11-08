// Это нужно для старого фетча. Для нового не нужно
const BASEURL = 'https://api.themoviedb.org/3/trending/';
const keyApi = '894ef72300682f1db325dae2afe3e7e2';

// Новая функция. Создает ссылку
export function buildUrl(pageNumber, mediaType, time_window) {
  const key = '894ef72300682f1db325dae2afe3e7e2';
  const baseUrl = `https://api.themoviedb.org/3/trending/`;
  // const mediaType = `movie`;
  // const time_window = `day`;

  return `${baseUrl}${mediaType}/${time_window}?api_key=${key}&page=${pageNumber}`;
}
// На всякий случай оставляю. Вдруг уже кто то использует
export function fetchFilmsTrends(page, urlPart) {
  return fetch(`${BASEURL}${urlPart}?api_key=${keyApi}&page=${page}`).then(
    response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    }
  );
}
// Я теперь использую этот. Но универсальней
export function fetchFilms(page, mediaType, time_window) {
  return fetch(buildUrl(page, mediaType, time_window)).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}