import updateMarkupCountries from './updateMarkupCountries';

function fetchCountries(name) {
  fetch(`https://restcountries.eu/rest/v2/name/${name}`)
    .then(response => {
      return response.json()
    })
    .then(updateMarkupCountries).catch(error => console.log(error))

}

export default fetchCountries;
