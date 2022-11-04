import { fetchTrending } from './requests';

export function renderAll() {
  fetchTrending();
  onClick();
}

import { onClick } from './modal';

