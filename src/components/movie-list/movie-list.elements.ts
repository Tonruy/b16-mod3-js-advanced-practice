// import { getMoviePosterUrl } from "../../utils";
import { MovieList } from "./models";
import { MovieListLayout } from "./models/movie-list-layout.enum";
// import { addMovieListContainerClickListener } from "./movie-list.event";

/**
 * Crea un elemento contenedor usando la class "container" de bootstrap
 * @returns HTMLDivElement
 */
export function createMoviesContainerElement(): HTMLDivElement {
  const moviesContainerElement = document.createElement("div");
  moviesContainerElement.id = "movie-list-container";
  moviesContainerElement.className = "container";

  // Add click listener
  // addMovieListContainerClickListener(moviesContainerElement);

  return moviesContainerElement;
}

/**
 * Crea todo el layout para un listado de películas
 * Nota: a partir de row y no del container pq no lo
 * queremos crear en todos los casos
 * @param movies
 * @param currentMovieListLayout
 * @returns
 */
export function createMovieListElement(
  movies: MovieList[],
  currentMovieListLayout: MovieListLayout
): HTMLDivElement {
  const movieListElement = createMovieListRowElement();

  if (Array.isArray(movies)) {
    movies.forEach((movie: MovieList) => {
      const isGridLayout = currentMovieListLayout === MovieListLayout.Grid;
      const movieElement = isGridLayout
        ? createMovieGridElement(movie)
        : createMovieRowElement(movie);
      movieListElement.appendChild(movieElement);
    });
  } else {
    const errorElement = document.createElement("p");
    errorElement.textContent = "Ha ocurrido un error, inténtelo más tarde.";
    console.error(
      'Error(createMovieListElement): "movies" no valid type (expected array).'
    );
  }

  return movieListElement;
}

function createMovieListRowElement(): HTMLDivElement {
  const movieRow = document.createElement("div");
  movieRow.className = "row";
  return movieRow;
}

function createMovieGridElement(movie: MovieList): HTMLDivElement {
  const movieElement = document.createElement("div");
  movieElement.className = "movie-grid col-lg-3 col-md-4 col-sm-6";
  // movieElement.appendChild(createPosterElement(movie.poster, movie.id));
  // movieElement.appendChild(createTitleElement(movie.title));
  // movieElement.appendChild(createDataElement(movie.rating, movie.year));
  // movieElement.appendChild(createOverviewElement(movie.overview));
  return movieElement;
}

function createMovieRowElement(movie: MovieList): HTMLDivElement {
  const movieElement = document.createElement("div");
  movieElement.className = "movie-list";

  const rowElement = document.createElement("div");
  rowElement.className = "row";

  const leftColumnElement = document.createElement("div");
  leftColumnElement.className = "col-1";

  const rightColumnElement = document.createElement("div");
  rightColumnElement.className = "col-11";

  rowElement.appendChild(leftColumnElement);
  rowElement.appendChild(rightColumnElement);
  movieElement.appendChild(rowElement);

  // leftColumnElement.appendChild(createPosterElement(movie.poster, movie.id));
  // rightColumnElement.appendChild(createTitleElement(movie.title));
  // rightColumnElement.appendChild(createDataElement(movie.rating, movie.year));
  // rightColumnElement.appendChild(createOverviewElement(movie.overview));

  return movieElement;
}
