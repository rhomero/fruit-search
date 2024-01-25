const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');


const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	console.log("Search function called with input:", str);

	let results = [];
	// TODO
	let searchTerm = str.toLowerCase();
	results = fruit.filter(val => {
		let lowerCaseVal = val.toLowerCase();
		return lowerCaseVal.includes(searchTerm)
	});
    //console.log("Search Results:", results);
	return results;
}

function searchHandler(e) {
	// TODO
	let inputVal = input.value;
	if(inputVal==="") {
		suggestions.innerHTML = "";
		return;
	}

  // Call the search function and log the results
  let searchResults = search(inputVal);
  console.log("Search Results:", searchResults);
  showSuggestions(searchResults, inputVal)
}

function showSuggestions(results, inputVal) {
	// TODO
	suggestions.innerHTML = "";

	results.forEach(element => {
		let listItem = document.createElement("li");
		listItem.textContent = element;
		suggestions.appendChild(listItem); 
		//listItem.addEventListener('mouseover', () => listItem.style.backgroundColor = "#e0e0e0" );
		//listItem.addEventListener("mouseout", () => listItem.style.backgroundColor = "");
		listItem.addEventListener('click', () => {
			input.value = element;
			suggestions.innerHTML = "";
		});
	});
}

// function useSuggestion(e) {
// 	// TODO
// 	console.log(e.textContent)
// }




input.addEventListener('keyup', searchHandler);
//suggestions.addEventListener('click', useSuggestion);
