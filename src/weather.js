import { weatherAPI } from './config';
import { renderHero, generateDailyForecastComponent } from './renderer.js';

// cache DOM

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

  return [globalMinTemp, globalMaxTemp];
}

function generateHeroSection(data) {
  console.log(`Data is: ${data}`);
  const heroObj = {
    location: data.address,
    temperature: data.currentConditions.temp,
    feels_like: data.currentConditions.feelslike,
    high: data.days[0].tempmax,
    low: data.days[0].tempmin,
  };

  renderHero(heroObj);
}

const loadWeather = async (searchInput, unit = 'metric') => {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${searchInput}?unitGroup=${unit}&key=${weatherAPI}&contentType=json`,
    );
    const weatherData = await response.json();
    console.log(weatherData);

    generateHeroSection(weatherData);

    const NEXT_TEN_DAYS = 10;
    const [globalMinTemp, globalMaxtemp] = getGlobalRange(
      weatherData,
      NEXT_TEN_DAYS,
    );

    generateDailyForecastComponent(
      weatherData,
      globalMinTemp,
      globalMaxtemp,
      NEXT_TEN_DAYS,
    );

    // hourly forecast
    // todo: to set it to display based on current time
    // console.log(weatherData.days[0].hours);

    // console.log(`Weather icon: ${weatherData.currentConditions.icon}`);
    // console.log(
    //   `Current weather condition: ${weatherData.currentConditions.conditions}`,
    // );

    // feels like
    // console.log(`Today feels like: ${weatherData.currentConditions.feelslike}`);

    // sunset
    // console.log(`Today's sunset at: ${weatherData.days[0].sunset}`);

    // humidity
    // console.log(`Today's humidity: ${weatherData.currentConditions.humidity}`);

    // wind
    // console.log(`Today's wind: ${weatherData.currentConditions.windspeed}`);

    // cloud cover
    // console.log(
    //   `Today's cloudcover: ${weatherData.currentConditions.cloudcover}`,
    // );

    // visibility
    // console.log(
    //   `Today's visibility: ${weatherData.currentConditions.visibility}`,
    // );

    // pressure
    // console.log(`Today's pressure: ${weatherData.currentConditions.pressure}`);
  } catch (err) {
    console.log(err);
    alert('Request invalid, please enter a valid city name');
  }
};

export default loadWeather;
