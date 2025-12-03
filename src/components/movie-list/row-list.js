import { getMoviePosterUrl } from "../../utils/api.utils.js";
import { ratingMovie, releaseDateMovie } from "../../utils/elements.utils.js";
import { moviesContainer } from "../../utils/elements.utils.js";


export function movieRowCard(movie) {
  const movieCard = document.createElement("div");
  movieCard.classList.add("movie-list", "d-flex", "gap-3", "h-100");
  movieCard.innerHTML = `
    <div class="col-3 col-sm-2 h-100 w-auto position-relative">
      <img src="${getMoviePosterUrl(movie.poster_path)}" class="movie-poster" alt="Portrait Movie">
    </div>

    <div>
      <h3 class="movie-title">${movie.title}</h3>
      <p>Rating: ${ratingMovie(movie)} | ${releaseDateMovie(movie)}</p>
      <p class="movie-overview">${movie.overview}</p>
    </div>
  `;

  movieCard.addEventListener("click", () => {
    const e = new CustomEvent("movieSelected", {
      detail: { id : movie.id }
    });
    document.dispatchEvent(e);
  });

  return movieCard;
}


export function renderingMoviesRow(movies) {
  const app = document.getElementById("app");
  const container = moviesContainer();
  container.id = "movie-list-container";
  container.classList.add("gx-3", "p-2", "align-items-stretch");

  movies.forEach(movie => {
    let card = movieRowCard(movie);
    container.appendChild(card);
  });

  if (!app.contains(container)) {
    app.appendChild(container);
  }
}