/* eslint-disable no-unused-expressions */
import { rapidApiKey, rapidApiHost } from './config';
import loadWeather from './weather';

let searchVal;

const input = document.querySelector("input[type='search']");
const searchResultContainer = document.querySelector('.search_result');

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

    // Check if the HTTP response status is ok (200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.text();
    const locObject = JSON.parse(result);
    return locObject.data;
  } catch (error) {
    console.error(`Parsing error: ${error.message}`);
    throw error;
  }
}

function stringifyLoc(loc) {
  const [city, region, country] = [loc.city, loc.region, loc.country];
  const stringifiedLoc = `${city}, ${region}, ${country}`;
  return stringifiedLoc;
}

function createSearchResult(stringifiedLoc) {
  const searchResultItem = document.createElement('li');
  searchResultItem.textContent = stringifiedLoc;
  return searchResultItem;
}

function handleClick(e) {
  const city = e.target.textContent.split(',')[0];
  input.value = city;
  loadWeather(input.value);
  searchResultContainer.innerHTML = '';
}

function handleSearch() {
  searchVal = input.value;
  let searchResult;

  searchResult = populateSearch(searchVal);

  if (searchResult === undefined) {
    console.log(`in undefined block`);
    // searchResult = setTimeout(populateSearch(searchVal), 1000);
  }

  // clear existing search
  searchResultContainer.innerHTML = '';
  searchResult.then((locArray) => {
    locArray.forEach((loc) => {
      const stringifiedLoc = stringifyLoc(loc);
      const searchResultItem = createSearchResult(stringifiedLoc);
      searchResultContainer.appendChild(searchResultItem);
      searchResultContainer.addEventListener('click', handleClick);
    });
  });
}

input.addEventListener('keyup', handleSearch);
