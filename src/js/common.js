import { fetchTrending } from './requests';
import { onClick } from './modal';
import { renderBtnModalFilm } from './render'


const buttonTestEl=document.querySelector(".test")
export function renderAll() {
  fetchTrending();
  onClick(buttonTestEl);
  renderBtnModalFilm();
}



