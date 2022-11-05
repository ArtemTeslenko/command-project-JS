const KEY = '45074c10b8f2ea3914a60876b2d17a1a';
const BASEURL = 'https://api.themoviedb.org/3/';


export function fetchFilmId(movie_id) {
    const arrFilms = fetch(`${BASEURL}/movie/${movie_id}?api_key=${KEY}`)
return arrFilms.then( response=> {
if(!response.ok){
    throw new Error(response.status)
}
console.log(response);
return response.json();
})
}

