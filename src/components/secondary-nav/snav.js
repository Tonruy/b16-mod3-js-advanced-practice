import { MovieListType } from "../../config";
import { renderSelectMenu } from "./select-menu";
import { updateMovies, setView } from "../movie-list/movie-list";

export function renderSecondaryNav({ page }) {

  const app = document.getElementById("app");
  const secondaryNav = document.createElement("div");
  secondaryNav.classList.add("nav-container");

  const innerContainer = document.createElement("div");
  innerContainer.classList.add("container");

  // First loading (main page)
  if (page === "main") {
    //Creation of buttons
    //Grid
    const gridBtn = document.createElement("button");
    //gridBtn its the default selected so I give it the correct class for first loading
    gridBtn.classList.add("btn", "btn-icon--selected");
    const gridImg = document.createElement("img");
    gridImg.src = "/grid-layout.svg";
    gridImg.classList.add("btn-icon");
    gridBtn.appendChild(gridImg);

    //List
    const listBtn = document.createElement("button");
    listBtn.classList.add("btn");
    const listImg = document.createElement("img");
    listImg.src = "/list-layout.svg";
    listImg.classList.add("btn-icon");
    listBtn.appendChild(listImg);

    //Appends
    innerContainer.appendChild(gridBtn);
    innerContainer.appendChild(listBtn);
    secondaryNav.appendChild(innerContainer);

    //Events
    gridBtn.addEventListener("click", () => {
      //We use setView() instead of calling the rendering function cos in that case, renderingMoviesGrid would create 2 containers and create a new error
      //Since currentView awaits for a string, we have to call the function with a string parameter
      setView("grid");
      gridBtn.classList.add("btn-icon--selected");
      listBtn.classList.remove("btn-icon--selected");
    });

    listBtn.addEventListener("click", () => {
      setView("list");
      listBtn.classList.add("btn-icon--selected");
      gridBtn.classList.remove("btn-icon--selected");
    });

    //Final append post buttons and events
    innerContainer.appendChild(renderSelectMenu(MovieListType));
    app.appendChild(secondaryNav);
    return;
  }

  // Detail Page
  if (page === "detail") {
    const backBtn = document.createElement("button");
    backBtn.classList.add("btn");

    const backImg = document.createElement("img");
    backImg.src = "/left-arrow.svg";
    backImg.alt = "back button image";
    backImg.classList.add("btn-icon");
    backBtn.appendChild(backImg);

    //Event for back to main Page
    backBtn.addEventListener("click", () => {
      document.dispatchEvent(new Event("backToList"));
    });

    innerContainer.appendChild(backBtn);
    secondaryNav.appendChild(innerContainer);

    return secondaryNav;
  }
}