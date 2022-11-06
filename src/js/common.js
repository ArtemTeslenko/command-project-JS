// import { fetchTrending } from './requests';
import { renderBtnModalFilm } from './render';
import { onClick } from './modal';
import { trendsControls } from './controls';

const buttonTestEl = document.querySelector('.test');
export function renderAll() {
  // fetchTrending();
  trendsControls();
  onClick(buttonTestEl);
  renderBtnModalFilm();
}
