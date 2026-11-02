let searchInput = document.getElementById("searchInput");
let resultCountries = document.getElementById("resultCountries");
let spinner = document.getElementById("spinner");
let searchInputEl = "";
let countryList = [];

function resultCountriesDisplay(result) {
    resultCountries.classList.add("result-countries");
    // countries-Div Container 
    let countriesDivEl = document.createElement("div");
    countriesDivEl.classList.add("country-card", "col-12", "col-md-5", "mr-auto", "ml-auto", "d-flex", "flex-row");
    resultCountries.appendChild(countriesDivEl);

    //flag Div
    let countriesFlagImage = document.createElement("img");
    countriesFlagImage.src = result.flag;
    countriesFlagImage.classList.add("country-flag");
    countriesDivEl.appendChild(countriesFlagImage);

    // text Div 
    let textDiv = document.createElement("div");
    textDiv.classList.add("textDiv");
    countriesDivEl.appendChild(textDiv);

    // text countries Name 
    let countriesName = document.createElement("h1");
    countriesName.textContent = result.name;
    countriesName.classList.add("country-name");
    textDiv.appendChild(countriesName);

    // text population of countries
    let countriesPopulation = document.createElement("p");
    countriesPopulation.textContent = result.population;
    countriesPopulation.classList.add("country-population");
    textDiv.appendChild(countriesPopulation);

}

function displayResult(results) {
    spinner.classList.toggle("d-none");
    for (let each of countryList) {
        let countryName = each.name;
        if (countryName.includes(searchInputEl)) {
            resultCountriesDisplay(each);
            console.log(each);
        }

    }
}

function searchCountries() {
    spinner.classList.toggle("d-none");
    let options = {
        method: "GET"
    };
    let url = "https://apis.ccbp.in/countries-data";
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            console.log(jsonData);
            countryList = jsonData;
            displayResult();
        });
}

function onchangeSearchInput(event) {
    searchInputEl = event.target.value;
    displayResult();
}

searchCountries();

searchInput.addEventListener("keyup", onchangeSearchInput())
