import { fetchTrending } from './requests';
import { onClick } from './modal';
import { renderBtnModalFilm } from './render'
import { testOnClickFetchFilmId } from './modal'


const buttonTestEl=document.querySelector(".test")
export function renderAll() {
  fetchTrending();
  onClick(buttonTestEl);
  renderBtnModalFilm();
  testOnClickFetchFilmId(buttonTestEl);
}



