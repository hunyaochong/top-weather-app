import createTempSlider from './temperature-range-indicator';

function getDayOfWeek(dateString) {
  const date = new Date(dateString); // Convert string to Date object
  const options = { weekday: 'long' }; // Specify the format for the day
  const dayOfWeek = new Intl.DateTimeFormat('en-US', options).format(date); // Format the date
  return dayOfWeek;
}

// const date = '2024-12-10';
// console.log(getDayOfWeek(date)); // Output: Tuesday

// cache parent container
const dailyForecastWrapper = document.querySelector('.daily-forecast__wrapper');

// create DOM elements
const dailyForecastDiv = document.createElement('div');
dailyForecastDiv.classList.add('daily-forecast');

const daySpan = document.querySelector('span');
daySpan.classList.add('day');

const weatherIcon = document.querySelector('img');
weatherIcon.setAttribute('src', './assets/icon/sunset.svg');
weatherIcon.setAttribute('alt', 'Sunset icon');

// read data into DOM elements
export default function createDailyForecast(
  date,
  localMinTemp,
  localMaxTemp,
  globalMinTemp,
  globalMaxTemp,
) {
  daySpan.textContent = getDayOfWeek(date);
  const tempSliderComponent = createTempSlider(
    localMinTemp,
    localMaxTemp,
    globalMinTemp,
    globalMaxTemp,
  );

  dailyForecastDiv.appendChild(daySpan);
  dailyForecastDiv.appendChild(weatherIcon);
  dailyForecastDiv.appendChild(tempSliderComponent);

  dailyForecastWrapper.appendChild(dailyForecastDiv);
}
