const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => DisplayCountries(data))
}


const DisplayCountries = countries => {

    const countryContainer = document.getElementById('countries-container');
    countries.forEach(country => {
        //console.log(country);

        const countryDiv = document.createElement('div');
        countryDiv.classList.add('countries');

        countryDiv.innerHTML = `
    <h3>Country Name:${country.name.common}</h3>
    <h4>Country Capital:${country.capital}</h4>
    <button onclick =LoadCountryDetails('${country.cca2}') >Details</button>
    `
        countryContainer.appendChild(countryDiv);

    });

}

const LoadCountryDetails = (code) => {
    //console.log('country details', code);
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    fetch(url)
        .then(res => res.json())
        .then(data => CountryDetails(data[0]))

}
const CountryDetails = country => {
    console.log(country);
    const countryDetails = document.getElementById('country-detail');
    countryDetails.innerHTML = `
    <h2>Details: ${country.name.common}</h2>
    <img src="${country.flags.png}">
    `

}
loadCountries();