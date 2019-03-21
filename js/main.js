// console.log(countries);
// select the input from the html 
const searchBox = document.querySelector('.search-box');

// target the button from html
const buttonInitial = document.querySelector('.search-by-initials');
const buttonAny = document.querySelector('search-by-any');

// add Eventlisteners to the buttons and Input
buttonInitial.addEventListener('click', searchCountriesByInitials);
//buttonAny.addEventListener('click', searchCountries);
searchBox.addEventListener('keyup', searchCountriesByInitials);

function searchCountriesByInitials (){
    
    let searchKey = searchBox.value;
    console.log(searchKey);

}

function searchCountries(){

    console.log(8+8);
}