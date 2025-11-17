import { getMoviePosterUrl } from "../../utils/api.utils";

	
export function movieGridCard (movie){
	const movieCard = document.createElement("div");
	movieCard.classList.add("movie-grid");
	movieCard.innerHTML = `
	<img class="movie-poster" src="${getMoviePosterUrl(movie.poster_path)} alt="Portrait Movie">
	<h3 class="movie-title">${movie.title}</h3>
	<p class="movie-overview">${movie.overview}</p>
	`
	return movieCard;
}