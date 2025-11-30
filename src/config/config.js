export const MovieListType = Object.freeze({
  nowPlaying: "now_playing",
  popular: "popular",
  topRated: "top_rated",
  upcoming: "upcoming",
});

//New cost just for showing up better names in select
export const displayNames = {
  nowPlaying: "En cartelera",
  popular: "Populares",
  topRated: "Mejor valoradas",
  upcoming: "Próximamente"
}

export const globalConfig = {
  notAvailableValue: "(No disponible)",
  defaultMovieListType: MovieListType.nowPlaying,
};

export const apiConfig = {
  apiKey: "158b32dbb3ad81297e88e22638a1bb1b",
  langIso: "es-ES",
  baseUrl: "https://api.themoviedb.org/3/",
  posterBaseUrl: "http://image.tmdb.org/t/p",
  backdropBaseUrl: "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces",
};
