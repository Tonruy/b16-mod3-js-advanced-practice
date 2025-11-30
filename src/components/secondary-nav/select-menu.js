import { MovieListType } from "../../config/config";
import { displayNames } from "../../config/config";


export function renderSelectMenu(MovieListType){
	const selectContainer = document.createElement("div")
	const textSelect = document.createElement("span");
	textSelect.classList.add("select-info");
	textSelect.textContent = "Categorías: ";


	const selectMenu = document.createElement("select");
	selectMenu.classList.add("select-toggle");
	const optionsSelect = Object.keys(MovieListType);

		optionsSelect.forEach((key)=>{
			const option = document.createElement("option");
			// value as key cos if not its gonna makes the keys showed up .
			option.value = MovieListType[key];
			option.textContent = displayNames[key];
			// Want popular as selected cos its gonna be the first page loaded
			if ( key === "popular"){
				option.selected = true;
			}
			selectMenu.appendChild(option)
		}
	)

selectMenu.addEventListener("change", (e) => {
	// The value of the target is what changes so:
	const selectedCategory = e.target.value;

	// We can create a customEvent with dispatchEvent + constructor "new" + detail (Detail MDN: An event-dependent value associated with the event. This value is then available to the handler using the CustomEvent.detail property. It defaults to null. )
	//document.dispatchEvent -> We can call the event in every document
	document.dispatchEvent(
		new CustomEvent("categoryChange", {
		detail: {category : selectedCategory}
	})
	);

})

	//Appends
	selectContainer.appendChild(textSelect);
	selectContainer.appendChild(selectMenu)

	//Class
	selectContainer.classList.add("select-categories");
	return selectContainer;
}