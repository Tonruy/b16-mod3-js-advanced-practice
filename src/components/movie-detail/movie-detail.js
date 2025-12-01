import { renderSecondaryNav } from "../secondary-nav/snav.js";
import { getMovieDetailsUrl, fetchMoviesData, getMoviePosterUrl, getMovieBackdropUrl } from "../../utils/api.utils.js";

export async function renderMovieDetail(movieId) {
  const app = document.getElementById("app");
  app.innerHTML = "";

  const snav = renderSecondaryNav({ page: "detail" });
  app.appendChild(snav);

  const url = getMovieDetailsUrl(movieId);
  const data = await fetchMoviesData(url);

  const container = document.createElement("div");
  container.classList.add("movie-details");

  container.style.backgroundImage = `url(${getMovieBackdropUrl(data.backdrop_path)})`;

  container.innerHTML = `
    <div class="movie-backdrop-overlay">
      <div class="container d-flex gap-4">
        <img class="movie-poster-detail" src="${getMoviePosterUrl(data.poster_path)}" alt="${data.title}">
        <div>
          <h2 class="movie-title">${data.title}</h2>
          <p class="movie-data">Valoración: ${data.vote_average} | Año: ${data.release_date.slice(0,4)}</p>
          <h3 class="movie-overview-title">Sinopsis:</h3>
          <p class="movie-overview">${data.overview}</p>
        </div>
      </div>
    </div>
  `;

  app.appendChild(container);
}