import refs from './refs';
import debounce from 'lodash.debounce';
import fetchCountries from './fetchCountries';
import clearContainer from './clearContainer';

refs.searchForm.addEventListener('input',debounce(formSearch,500));



  function formSearch(event) {
    clearContainer();
    const inputValue=event.target.value.trim();
    if(inputValue) {
      fetchCountries(inputValue);
    }
  }
  // const inputValue=event.target.value;
  // console.log(inputValue);
  // fetchCountries(inputValue);
  // if(!inputValue) {
  //   clearContainer();
  //   return;
//   }
// }
export default formSearch;
