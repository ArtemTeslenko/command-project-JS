import { KEY, BASEURLGENREID } from './commonKey&Url';

export async function fetchGenreId() {
  const response = await fetch(
    `${BASEURLGENREID}movie/list?api_key=${KEY}&language=en-US`
  );
  if (!response.ok) {
    throw new Error(response.status);
  }
  return await response.json();
}
