import { notificationsError } from './notifications';
import refs from './refs';
import tplCountriesList from '../templates/countriesList.hbs';
import tplCountry from '../templates/countries.hbs';
import clearContainer from './clearContainer'

function updateMarkupCountries(countries) {
  if(countries.status === 404){
    notificationsError('There are no countries with that name!');
    return;
  }

  if(countries.length > 10) {
    notificationsError('Too many matches found. Please enter a more specific query!');
    return;
  }

  if(countries.length <= 10 && countries.length >1) {
    refs.resultSearch.insertAdjacentHTML('beforeend',tplCountriesList(countries));
    return;
  }
  refs.resultSearch.insertAdjacentHTML('beforeend',tplCountry(countries));
}



export default updateMarkupCountries;

