import { weatherAPI } from './config';
import { renderHero, renderDailyForecastComponent } from './renderer';
import generateWeatherCardSection from './cardComponent';

function getGlobalRange(data, duration) {
  const minTempArr = [];
  const maxTempArr = [];
  for (let i = 1; i <= duration; i++) {
    const dailyWeather = data.days[i];
    const tempMin = dailyWeather.tempmin;
    const tempMax = dailyWeather.tempmax;
    minTempArr.push(tempMin);
    maxTempArr.push(tempMax);
  }

  const globalMinTemp = Math.min(...minTempArr);
  const globalMaxTemp = Math.max(...maxTempArr);

  return [globalMinTemp.toFixed(1), globalMaxTemp.toFixed(1)];
}

function generateHeroSection(data) {
  const heroObj = {
    location: data.address,
    temperature: data.currentConditions.temp,
    feels_like: data.currentConditions.feelslike,
    high: data.days[0].tempmax.toFixed(1),
    low: data.days[0].tempmin.toFixed(1),
  };

  renderHero(heroObj);
}

function generateDailyForecastSection(data) {
  const NEXT_TEN_DAYS = 10;
  const [globalMinTemp, globalMaxtemp] = getGlobalRange(data, NEXT_TEN_DAYS);

  renderDailyForecastComponent(
    data,
    globalMinTemp,
    globalMaxtemp,
    NEXT_TEN_DAYS,
  );
}

const loadWeather = async (searchInput, unit = 'metric') => {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${searchInput}?unitGroup=${unit}&key=${weatherAPI}&contentType=json`,
    );
    const weatherData = await response.json();
    console.log(weatherData);

    generateHeroSection(weatherData);

    generateDailyForecastSection(weatherData);
    // hourly forecast
    // todo: to set it to display based on current time
    // console.log(weatherData.days[0].hours);

    generateWeatherCardSection(weatherData);

    /* Other useful info to consider:
    weatherData.currentConditions.icon
    weatherData.currentConditions.conditions
    */
  } catch (err) {
    console.log(err);
    alert('Request invalid, please enter a valid city name');
  }
};

export default loadWeather;
