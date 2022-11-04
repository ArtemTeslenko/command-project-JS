const backdropEl =document.querySelector(".backdrop")
const buttonTestEl=document.querySelector(".test")
const buttonClose=document.querySelector(".modal-button")


function onClouseModal(el) {
    backdropEl.classList.add("is-hidden")
  }

function onOpenModal(e) {
    e.preventDefault();
    backdropEl.classList.remove("is-hidden")
}

export function onClick(e) {
  buttonTestEl.addEventListener('click', onOpenModal)
  buttonClose.addEventListener('click', onClouseModal)
}