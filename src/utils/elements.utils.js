/**
 * Returns an element by id. If the element is not found, an error is thrown.
 * @param id
 * @param functionName
 * @returns Element as T extends HTMLElement
 */
export function getElementByIdFrom(id, functionName) {
  const element = document.querySelector < T > `#${id}`;

  if (element === null)
    throw new Error(`Error(${functionName}): element id '${id}' not found.`);

  return element;
}

/**
 *
 * @returns App element as HTMLDivElement
 */
export function getAppElement() {
  return getElementByIdFrom < HTMLDivElement > "app";
}

export function createRowElement() {
  const element = document.createElement("div");
  element.className = "row";
  return element;
}

export function createColElement(numColums) {
  const element = document.createElement("div");
  element.className = `col-${numColums}`;
  return element;
}


export function releaseDateMovie(movie) {
  let fullYear = movie.release_date.slice(0, 4);
  return fullYear;
}

export function ratingMovie(movie){
  //toFixed() metodo que determina el número de decimáles que queremos que aparezca
const rating = movie.vote_average.toFixed(1)
return rating
}

/**
 * Creation and wipe of container for movies list 
 * @returns container
 */
export function moviesContainer (){
  let containerCheck = document.getElementById("movie-list-container")
  if ( containerCheck !== null) {
    containerCheck.innerHTML = "";
    return containerCheck;
  }
  else {
	const moviesContent = document.createElement("div");
	moviesContent.classList = "";
	moviesContent.id = "movie-list-container";
	moviesContent.innerHTML= "";

  return moviesContent;
}
}