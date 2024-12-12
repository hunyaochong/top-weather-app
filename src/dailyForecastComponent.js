import createTempSlider from './temperature-range-indicator';
import sunsetIcon from './assets/icon/sunset.svg';

function getDayOfWeek(dateString) {
  const date = new Date(dateString); // Convert string to Date object
  const options = { weekday: 'long' }; // Specify the format for the day
  const dayOfWeek = new Intl.DateTimeFormat('en-US', options).format(date); // Format the date
  return dayOfWeek;
}

export default function createDailyForecast(
  date,
  localMinTemp,
  localMaxTemp,
  globalMinTemp,
  globalMaxTemp,
) {
  // create DOM elements
  const dailyForecastDiv = document.createElement('div');
  dailyForecastDiv.classList.add('daily-forecast');

  // todo: to tailor icon based on weatherCondition
  // const weatherIcon = document.querySelector('img');
  // weatherIcon.src = sunsetIcon;
  // weatherIcon.setAttribute('alt', 'Sunset icon');

  const daySpan = document.querySelector('span');
  daySpan.classList.add('day');
  daySpan.textContent = getDayOfWeek(date);

  const tempSliderComponent = createTempSlider(
    localMinTemp,
    localMaxTemp,
    globalMinTemp,
    globalMaxTemp,
  );

  dailyForecastDiv.appendChild(daySpan);
  // dailyForecastDiv.appendChild(weatherIcon);
  dailyForecastDiv.appendChild(tempSliderComponent);

  return dailyForecastDiv;
}
