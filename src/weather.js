import { weatherAPI } from './config';
import createDailyForecast from './dailyForecastComponent';

const loadWeather = async (searchInput, unit = 'metric') => {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${searchInput}?unitGroup=${unit}&key=${weatherAPI}&contentType=json`,
    );
    const weatherData = await response.json();
    console.log(weatherData);

    // hourly forecast
    // todo: to set it to display based on current time
    console.log(weatherData.days[0].hours);

    // daily forecast for next 10 days
    const NEXT_TEN_DAYS = 10;
    // todo: get the min and max temp
    const [globalMinTemp, globalMaxtemp] = getGlobalRange(weatherData.days);

    for (let i = 1; i <= NEXT_TEN_DAYS; i++) {
      const dailyWeatherObj = weatherData.days[i];
      console.log(
        `tempmin: ${dailyWeatherObj.tempmin}, tempmax: ${dailyWeatherObj.tempmax}`,
      );
      // createDailyForecast(weatherData.days[i].datetime);
    }

    // header - today;s condition (address, temp, conditions, tempmax tempmin)
    console.log(weatherData.currentConditions.icon);
    console.log(weatherData.address);
    console.log(weatherData.currentConditions.temp);
    console.log(weatherData.currentConditions.conditions);
    console.log(weatherData.days[0].tempmax);
    console.log(weatherData.days[0].tempmin);

    // feels like
    console.log(`Today feels like: ${weatherData.currentConditions.feelslike}`);

    // sunset
    console.log(`Today's sunset at: ${weatherData.days[0].sunset}`);

    // humidity
    console.log(`Today's humidity: ${weatherData.currentConditions.humidity}`);

    // wind
    console.log(`Today's wind: ${weatherData.currentConditions.windspeed}`);

    // cloud cover
    console.log(
      `Today's cloudcover: ${weatherData.currentConditions.cloudcover}`,
    );

    // visibility
    console.log(
      `Today's visibility: ${weatherData.currentConditions.visibility}`,
    );

    // pressure
    console.log(`Today's pressure: ${weatherData.currentConditions.pressure}`);
  } catch (err) {
    console.log(err);
    alert('Request invalid, please enter a valid city name');
  }
};

export default loadWeather;
