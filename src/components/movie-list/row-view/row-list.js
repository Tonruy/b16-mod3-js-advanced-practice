import { MovieListType } from "../../../config";
import { getMoviePosterUrl } from "../../../utils/api.utils";
import { ratingMovie, releaseDateMovie } from "../../../utils/elements.utils";
import { getMovieListData } from "../movie-list";

export function movieRowCard(movie) {
const movieCard = document.createElement("div");
movieCard.classList.add("movie-list", "d-flex", "gap-3", "h-100");
movieCard.innerHTML = `
<div class="col-3 col-sm-2">
<img src="${getMoviePosterUrl(movie.poster_path)}" class="movie-poster", "h-100"; alt="Portrait Movie">
</div>
<div>
	<h3 class= movie-title>${movie.title}</h3>
	<p>Rating: ${ratingMovie(movie)} | ${releaseDateMovie(movie)}</p>
	<p class="movie-overview">${movie.overview}</p>
</div>
`
return movieCard
}

export async function renderingMoviesRow(movieListType = MovieListType.popular){
	const movies = await getMovieListData(movieListType);
	const app = document.getElementById("app");
	app.classList.add("container")
	app.innerHTML= "";
	const listContainer = document.createElement("div");
		listContainer.id= "movie-list-container";
		listContainer.classList.add("row", "gx-3", "p-2","align-items-stretch");
		
		movies.forEach( movie => {
		let card = movieRowCard(movie);
		listContainer.appendChild(card);
		 app.appendChild(listContainer)

	});
}