// select the input from the html
const searchBox = document.querySelector(".search-box");
// // target the button from html
const buttonInitial = document.querySelector(".search-by-initials");
const buttonAny = document.querySelector(".search-by-any");
const resultSection = document.querySelector(".result-section");

buttonInitial.addEventListener("click", function() {
  buttonAny.classList.remove("checked");
  this.classList.add("checked");
  searchBox.addEventListener("keyup", searchCountriesByInitials);
  searchCountriesByInitials();
});

buttonAny.addEventListener("click", function() {
  buttonInitial.classList.remove("checked");
  this.classList.add("checked");
  searchBox.addEventListener("keyup", searchByAny);
  searchByAny();
});

const sortButton = document.querySelector(".fas");
sortButton.addEventListener("click", function() {
  countries.reverse();
  sortButton.classList.toggle("fa-sort-alpha-down");
  sortButton.classList.toggle("fa-sort-alpha-up");

  if (buttonInitial.classList.contains("checked")) {
    searchCountriesByInitials();
  }

  if (buttonAny.classList.contains("checked")) {
    searchByAny();
  }
});

// this function filters country starting with the given searchkey
function searchCountriesByInitials() {
  clearItems();
  const searchResult = countries.filter(country => {
    return country.toUpperCase().startsWith(searchBox.value.toUpperCase());
  });

  // target where you wanna put the created box
  searchResult.forEach(element => {
    // create new divs
    const resultDiv = document.createElement("div");
    resultDiv.setAttribute("class", "country-div");
    resultDiv.style.backgroundColor = generateRGB();

    const resultSpan = document.createElement("span");
    resultSpan.textContent = element;

    // append created child to result section
    resultDiv.appendChild(resultSpan);
    resultSection.appendChild(resultDiv);
  });

  // FUNCTION GENERATEDIV ENDS
}

// console.log(searchCountriesByInitials());

// this function filters country from array with any searchkey
function searchByAny() {
  clearItems();
  const pattern = new RegExp(searchBox.value, "gi");
  const searchResult = countries.filter(country => {
    return country.toUpperCase().match(pattern);
  });

  // target where you wanna put the created box
  searchResult.forEach(element => {
    // create new divs
    const resultDiv = document.createElement("div");
    resultDiv.setAttribute("class", "country-div");
    resultDiv.style.backgroundColor = generateRGB();

    const resultSpan = document.createElement("span");
    resultSpan.textContent = element;

    // append created child to result section
    resultDiv.appendChild(resultSpan);
    resultSection.appendChild(resultDiv);
  });
}

// creating function that creates rgb color
function generateRGB() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  return `rgb(${r},${g},${g})`;
}

// this function clears the search results
function clearItems() {
  const divsToRemove = document.querySelectorAll(".country-div");
  divsToRemove.forEach(element => {
    element.remove();
  });
}

// Action listeners
// searchBox.addEventListener("keyup", searchCountriesByInitials);
//searchBox.addEventListener("keyup", searchByAny);

//console.log(displayCountries());

//console.log(displayCountries());

function sortCountries() {
  return countries.reverse();

  // // target where you wanna put the created box
  // searchResult.forEach(element => {
  //   // create new divs
  //   const resultDiv = document.createElement("div");
  //   resultDiv.setAttribute("class", "country-div");
  //   resultDiv.style.backgroundColor = generateRGB();

  //   const resultSpan = document.createElement("span");
  //   resultSpan.textContent = element;

  //   // append created child to result section
  //   resultDiv.appendChild(resultSpan);
  //   resultSection.appendChild(resultDiv);
  //});
}

// displayCountries();
