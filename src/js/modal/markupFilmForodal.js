import { fetchFilmId } from "./fetchFilmId";
let id

function testFetchFilmId(e){
 
    // console.log("id film", e.target.id);
    // id=e.target.id;
    id = 436270
  
    fetchFilmId(id).then(respons => {
      console.log("respons_film 2", respons);
     return
    }) 
   }

export function testOnClickFetchFilmId(btn) {
  btn.addEventListener('click', testFetchFilmId);
}
   
