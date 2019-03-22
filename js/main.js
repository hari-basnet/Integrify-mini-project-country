// select the input from the html
const searchBox = document.querySelector(".search-box");

// target the button from html
const buttonInitial = document.querySelector(".search-by-initials");
const buttonAny = document.querySelector(".search-by-any");

// add Eventlisteners to the buttons and Input
buttonInitial.addEventListener("click", function () {
    buttonAny.classList.remove('clicked');
    buttonInitial.classList.add('clicked');
    //console.log(buttonInitial);
    searchBox.addEventListener("keyup", searchCountriesByInitials);
    searchBox.addEventListener("keyup", generateDiv);
});

buttonAny.addEventListener("click", function () {
    buttonInitial.clicked == false;
    searchBox.addEventListener("keyup", generateDiv2);
    searchBox.addEventListener("keyup", searchByAny);
});

//console.log(buttonInitial);

// searchBox.addEventListener('keyup', generateDiv);
// searchBox.addEventListener('keyup', searchByAny);

// this function filters country starting with the given searchkey
function searchCountriesByInitials() {
    const searchKey = searchBox.value;
    const searchResult = countries.filter(country => {
        return country.toUpperCase().startsWith(searchKey.toUpperCase());
    });

    return searchResult;
}

// this function filters country from array with any searchkey
function searchByAny() {
    const searchKey = searchBox.value;
    const pattern = new RegExp(searchKey, "g");

    const searchResult = countries.filter(country => {
        return country.toUpperCase().match(pattern);
    });
    return searchResult;
}

let newCountries;

// create a function that creates div and puts the text content

function generateDiv() {
    clearItems();
    // target where you wanna put the created box
    const resultSection = document.querySelector(".result-section");
    //console.log(resultSection);
    newCountries = searchCountriesByInitials();

    countries.forEach(element => {
        // start by clearing the divs
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

function generateDiv2() {
    clearItems();
    // target where you wanna put the created box
    const resultSection2 = document.querySelector(".result-section");
    //console.log(resultSection);
    newCountries = searchByAny();
    newCountries.forEach(element => {
        // start by clearing the divs
        // create new divs
        const resultDiv2 = document.createElement("div");
        resultDiv2.setAttribute("class", "country-div");
        resultDiv2.style.backgroundColor = generateRGB();

        const resultSpan2 = document.createElement("span");
        resultSpan2.textContent = element;

        // append created child to result section
        resultDiv2.appendChild(resultSpan2);
        resultSection2.appendChild(resultDiv2);
    });

    // FUNCTION GENERATEDIV ENDS
}

// creating function that creates rgb color
function generateRGB() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return `rgb(${r},${g},${b})`;
}

// this function clears the search results
function clearItems() {
    const divsToRemove = document.querySelectorAll(".country-div");
    divsToRemove.forEach(element => {
        element.remove();
    });
}
