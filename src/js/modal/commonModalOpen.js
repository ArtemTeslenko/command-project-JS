const backdropEl =document.querySelector(".backdrop")
const buttonTestEl=document.querySelector(".test")
const buttonClose=document.querySelector(".modal-button")
const bodyEl=document.querySelector("body")


function onClouseModal(el) {
    backdropEl.classList.add("is-hidden")
    
  }

function onOpenModal(e) {
    e.preventDefault();
    backdropEl.classList.remove("is-hidden")

    bodyEl.addEventListener('keydown', creatKeydownEscape);

function creatKeydownEscape(e) {
  if (e.code === "Escape") {
   backdropEl.classList.add("is-hidden")
   bodyEl.removeEventListener('keydown', creatKeydownEscape);
  }
}
}

export function onClick(btn) {
  btn.addEventListener('click', onOpenModal)
  buttonClose.addEventListener('click', onClouseModal)
  backdropEl.addEventListener("click", onClouseModal)
}