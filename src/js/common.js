// import { fetchTrending } from './requests';
import { renderBtnModalFilm } from './render';
import { onClick } from './modal';
import { renderBtnModalFilm } from './render'
import { testOnClickFetchFilmId } from './modal'
import { trendsControls } from './controls';
import { trendfilmsMarkup } from "./markup";
import { onOupenModalFilm } from "./modal";


const buttonTestEl = document.querySelector('.test');


export function renderAll() {
   // fetchTrending();
  trendsControls();
  // renderBtnModalFilm();
  onOupenModalFilm();
  onClick(buttonTestEl);
}

