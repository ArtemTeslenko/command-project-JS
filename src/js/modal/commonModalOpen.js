// import { testOnClickFetchFilmId } from '../modal'
import { FetchFilmId } from "../modal";
import { clianFilmCard } from './markupFilmForodal';

const backdropEl =document.querySelector(".backdrop")
const buttonTestEl=document.querySelector(".test")
const buttonClose=document.querySelector(".modal__button")
const bodyEl=document.querySelector("body")
const mainEl = document.querySelector('main')
let filmCardLink = 0;
let filmCardLinkId = 0;


function onClouseModal(e) {
  backdropEl.classList.add("is-hidden")
  clianFilmCard();
  }

function onClouseModalBackdrop(e) {
  if(e.target===e.currentTarget)
  {backdropEl.classList.add("is-hidden")}
  return
  } 

function onOpenModal(e) {
    // e.preventDefault();
    backdropEl.classList.remove("is-hidden")
    bodyEl.addEventListener('keydown', creatKeydownEscape);

function creatKeydownEscape(e) {
  if (e.code === "Escape") {
   backdropEl.classList.add("is-hidden")
   bodyEl.removeEventListener('keydown', creatKeydownEscape);
  }
}
}

function onEventListenerClick(e) {
  e.preventDefault();
  filmCardLink = e.target;
  filmCardLinkId = e.target.id

  FetchFilmId(filmCardLinkId) 
  onOpenModal(filmCardLink);
}

export function onClick(btn) {
  btn.addEventListener('click', onOpenModal)
  buttonClose.addEventListener('click', onClouseModal)
  backdropEl.addEventListener("click", onClouseModalBackdrop)
}

export function onOpenModalFilm(e) {
  mainEl.addEventListener('click',onEventListenerClick)
  buttonClose.addEventListener('click', onClouseModal)
  backdropEl.addEventListener("click", onClouseModalBackdrop)
}
