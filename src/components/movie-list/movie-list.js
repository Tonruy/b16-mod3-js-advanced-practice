import { MovieListType } from "../../config";
import { fetchMoviesData, getMovieListUrl } from "../../utils/api.utils";
import { movieGridCard } from "./grid-list.js";

//1 traer datos del servidor
async function getMovieListData(MovieListType){
	const fetchURL = getMovieListUrl(MovieListType)
	let data = await fetchMoviesData(fetchURL);
	//console.log(data.results);
	return data.results;
}


//2 crear y añadir elementos al dom

export async function renderingMovies(movieListType = MovieListType.popular){
	const movies = await getMovieListData(movieListType);
	console.log(movies);
	const app = document.getElementById("app");
	app.innerHTML= "";
	const listContainer = document.createElement("div");
	listContainer.id= "movie-list-container";
	listContainer.classList.add("row", "gx-3", "p-2", "h-100");
	movies.forEach( movie => {
	let card = movieGridCard(movie);
 listContainer.appendChild(card);
 app.appendChild(listContainer)
	}
	)
}

renderingMovies()

//3 eventos



