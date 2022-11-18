import { KEY, BASEURLTRENDS } from './commonKey&Url';

// Новая функция. Создает ссылку
export function buildUrl(pageNumber, trendUrl) {
  // const mediaType = `movie`;
  // const time_window = `day`;
  //trend Url -->https://api.themoviedb.org/3/trending/movie/week?api_key=894ef72300682f1db325dae2afe3e7e2&page=
  return `${trendUrl}${pageNumber}`;
}
// На всякий случай оставляю. Вдруг уже кто то использует
export function fetchFilmsTrends(page, urlPart) {
  return fetch(`${BASEURLTRENDS}${urlPart}?api_key=${KEY}&page=${page}`).then(
    response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    }
  );
}
//Я теперь использую этот. Но универсальней
export function fetchFilms(page, trendUrl) {
  return fetch(buildUrl(page, trendUrl)).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
