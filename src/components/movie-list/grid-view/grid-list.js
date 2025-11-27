import { getMoviePosterUrl } from "../../../utils/api.utils";
import { releaseDateMovie } from "../../../utils/elements.utils";
import { ratingMovie } from "../../../utils/elements.utils";
import { getMovieListData } from "../movie-list";
import { MovieListType } from "../../../config";
	
export function movieGridCard (movie){

	const movieCard = document.createElement("div");
	movieCard.classList.add("movie-grid");
	movieCard.innerHTML = `
	<img class="movie-poster"  src="${getMoviePosterUrl(movie.poster_path)} alt="Portrait Movie">
	<h3 class="movie-title">${movie.title}</h3>
	<p class="movie-rating">Rating: ${ratingMovie(movie)} | ${releaseDateMovie(movie)}</p>
	<p class="movie-overview">${movie.overview}</p>
	`
	return movieCard;
}

export async function renderingMoviesCol(movieListType = MovieListType.popular){

	const movies = await getMovieListData(movieListType);
	console.log(movies);
	const app = document.getElementById("app");
	app.classList.add("container");
	app.innerHTML= "";

	const listContainer = document.createElement("div");
	listContainer.id= "movie-list-container";
	// row = grid, gx-3 espacio horizontal entre columnas, p-2: padding 2; h-100: height 100%
	listContainer.classList.add("row", "gx-3", "p-2", "h-100");
	
	movies.forEach( movie => {
	let card = movieGridCard(movie);
 	listContainer.appendChild(card);
	 app.appendChild(listContainer)
	}
	)
}