import getHourValue from './helpers';
import sunsetIcon from './assets/icon/sunset.svg';

export default function generateHourlyForecastSection(
  currentTime,
  todayWeatherData,
  nextDayWeatherData,
) {
  const hourlyForecastArr = filterForecast(
    currentTime,
    todayWeatherData,
    nextDayWeatherData,
  );

  const parentContainer = document.querySelector(
    '.hourly-forecast-group-wrapper',
  );

  parentContainer.innerHTML = '';

  hourlyForecastArr.forEach(({ temp, datetime, icon }) => {
    const hourForecastComponent = generateComponent(
      temp,
      getHourValue(datetime),
      icon,
    );
    console.log(hourForecastComponent);
    parentContainer.appendChild(hourForecastComponent);
  });
}

function filterForecast(currentTime, todayWeatherData, nextDayWeatherData) {
  const hourlyForecastArray = [];
  const currentHour = getHourValue(currentTime);

  const filteredDataToday = todayWeatherData.filter(
    ({ datetime }) => getHourValue(datetime) >= currentHour,
  );
  const filteredDataNextDay = nextDayWeatherData.filter(
    ({ datetime }) => getHourValue(datetime) <= currentHour,
  );

  hourlyForecastArray.push(...filteredDataToday);
  hourlyForecastArray.push(...filteredDataNextDay);
  return hourlyForecastArray;
}

function generateComponent(temp, hour, icon) {
  // Create the main div element
  const forecastGroup = document.createElement('div');
  forecastGroup.className = 'hourly-forecast-group';

  // Create and append the first span
  const timeSpan = document.createElement('span');
  // todo: dynamic assignment
  timeSpan.textContent = hour;
  forecastGroup.appendChild(timeSpan);

  // Create and append the image element
  const img = document.createElement('img');
  // todo: dynamic assignment
  img.src = sunsetIcon;
  forecastGroup.appendChild(img);

  // Create and append the second span
  const temperatureSpan = document.createElement('span');
  // todo: dynamic assignment
  temperatureSpan.textContent = temp;
  forecastGroup.appendChild(temperatureSpan);

  return forecastGroup;
}
