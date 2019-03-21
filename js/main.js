// console.log(countries);
// select the input from the html 
const searchBox = document.querySelector('.search-box');

// target the button from html
const buttonInitial = document.querySelector('.search-by-initials');
const buttonAny = document.querySelector('search-by-any');

// add Eventlisteners to the buttons and Input
//buttonInitial.addEventListener('click', generateDiv);
//buttonAny.addEventListener('click', searchCountries);

searchBox.addEventListener('keyup', generateDiv);

function searchCountriesByInitials() {
    const searchKey = searchBox.value;
    // console.log(searchKey);

    const searchResult = countries.filter(country => {
        return country.toUpperCase().startsWith(searchKey.toUpperCase());
    })
    // console.log(searchResult);
    return searchResult;
}

// create a function that creates div and puts the text content 

function generateDiv() {

    clearItems();
    // target where you wanna put the created box
    const resultSection = document.querySelector('.result-section');
    //console.log(resultSection);

    const newCountries = searchCountriesByInitials()

    const el = newCountries.forEach(element => {
        // start by clearing the divs 
        // create new divs
        const resultDiv = document.createElement('div');
        resultDiv.setAttribute('class', 'country-div');
        resultDiv.style.backgroundColor = generateRGB();
        
        const resultSpan = document.createElement('span');
        resultSpan.textContent = element;
        
        // append created child to result section
        resultDiv.appendChild(resultSpan);
        resultSection.appendChild(resultDiv);
        
    });
    
    
    

    
    //console.log(resultDiv);

// FUNCTION GENERATEDIV ENDS
}

// creating function that creates rgb color

function generateRGB (){

    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return `rgb(${r},${g},${b})`;
}
//console.log(searchCountriesByInitials());



// function searchCountries() {

//     console.log(8 + 8);
// }

function clearItems() {
    const divsToRemove = document.querySelectorAll('.country-div');
    divsToRemove.forEach(element => {
        element.remove();
    })

}