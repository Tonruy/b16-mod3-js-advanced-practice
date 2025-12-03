import { releaseDateMovie } from "../../utils/elements.utils.js";
import { getMoviePosterUrl } from "../../utils/api.utils.js";
import { ratingMovie } from "../../utils/elements.utils.js";
import { moviesContainer } from "../../utils/elements.utils.js";
import { renderMovieDetail } from "../movie-detail/movie-detail.js";

export function movieGridCard(movie) {
  const movieCard = document.createElement("div");
  movieCard.id = movie.id;
  movieCard.classList.add("movie-grid");
  movieCard.innerHTML = `
   <img class="movie-poster" src="${getMoviePosterUrl(movie.poster_path)}" alt="Portrait Movie ">
    <h3 class="movie-title">${movie.title}</h3>
    <p class="movie-rating">Rating: ${ratingMovie(movie)} | ${releaseDateMovie(movie)}</p>
    <p class="movie-overview">${movie.overview}</p>
  `;

movieCard.addEventListener("click", () => renderMovieDetail(movieCard.id));
  return movieCard;
}

// Not fetch cos there is another function in movie-list.js
export function renderingMoviesGrid(movies) {

  const app = document.getElementById("app");

  const container = moviesContainer();
  // row = grid, gx-3 horizontal space between cols, p-2 padding 2; h-100: height 100%
  container.classList.add("row", "gx-3", "p-2", "h-100");

  movies.forEach(movie => {
    let card = movieGridCard(movie);
    container.appendChild(card);
  });

  app.appendChild(container);
}