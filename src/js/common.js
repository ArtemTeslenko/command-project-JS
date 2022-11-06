// import { fetchTrending } from './requests';
import { onClick } from './modal';
import { trendsControls } from './controls';
import { trendfilmsMarkup } from "./markup";
import { onOpenModalFilm } from "./modal";


// const buttonTestEl = document.querySelector('.test');


export function renderAll() {
   // fetchTrending();
  trendsControls();
  onOpenModalFilm();
  // onClick(buttonTestEl);
}

