import { fetchTrending } from './requests';
import { onClick } from './modal';
export function renderAll() {
  fetchTrending();
  onClick();
}



