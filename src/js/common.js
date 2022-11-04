import { fetchTrending } from './requests';
import { onClick } from './modal';
const buttonTestEl=document.querySelector(".test")
export function renderAll() {
  fetchTrending();
  onClick(buttonTestEl);
}



