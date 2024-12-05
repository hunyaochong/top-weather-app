/* eslint-disable no-unused-expressions */
import { rapidApiKey, rapidApiHost } from './config';
import loadWeather from './weather';

// each time a key is into input
// submit a new request to geoDB cities based on latest string
// console.log out the new search results

let search;

const input = document.querySelector("input[type='text']");
const submitBtn = document.querySelector("input[type='submit']");
const unitGroup = document.querySelector('.unit-group');

async function populateSearch(searchInput) {
  const processedString = searchInput.replace(' ', '%20');
  const url = `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${processedString}`;
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': `${rapidApiKey}`,
      'x-rapidapi-host': `${rapidApiHost}`,
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

input.addEventListener('keyup', () => {
  search = input.value;
  // submit inputVal into query
  populateSearch(search);
});

submitBtn.addEventListener('click', () => {
  loadWeather(search);
});

unitGroup.addEventListener('click', (e) => {
  // by default, display metric unit
  e.target.id === 'fahrenheit'
    ? loadWeather(search, 'us')
    : loadWeather(search, 'metric');
});
