import getHourValue from './helpers';
import iconMap from './iconMapper';

export default function generateHourlyForecastSection(
  currentTime,
  todayWeatherData,
  nextDayWeatherData,
  todaySunset,
  nextDaySunrise,
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
      getHourValue(todaySunset),
      getHourValue(nextDaySunrise),
    );
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

function generateComponent(temp, hour, icon, sunsetHour, sunriseHour) {
  const forecastGroup = document.createElement('div');
  forecastGroup.className = 'hourly-forecast-group';

  const timeSpan = document.createElement('span');
  timeSpan.textContent = hour;
  forecastGroup.appendChild(timeSpan);

  const img = document.createElement('img');
  if (hour === sunsetHour) {
    img.src = iconMap.sunset;
  } else if (hour === sunriseHour) {
    img.src = iconMap.sunrise;
  } else {
    img.src = iconMap[icon];
  }
  forecastGroup.appendChild(img);

  // Create and append the second span
  const temperatureSpan = document.createElement('span');
  temperatureSpan.textContent = temp;
  forecastGroup.appendChild(temperatureSpan);

  return forecastGroup;
}
