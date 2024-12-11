import createDailyForecast from './dailyForecastComponent';

export function renderHero(hero) {
  // cache DOM
  const weatherHeroSection = document.querySelector('.weather-hero');
  const weatherHeroLoc = document.querySelector('.weather-hero__location');
  const weatherHeroTemp = document.querySelector('.weather-hero__temperature');
  const weatherHeroFeelsLike = document.querySelector(
    '.weather-hero__feels_like',
  );
  const weatherHeroTempRange = document.querySelector(
    '.weather-hero__temperature_range',
  );
  const weatherHeroTempHigh = document.querySelector('#high');
  const weatherHeroTempLow = document.querySelector('#low');

  // assign ele to DOM
  weatherHeroLoc.textContent = hero.location;
  weatherHeroTemp.textContent = `${hero.temperature}°`;
  weatherHeroFeelsLike.textContent = `Feels like ${hero.feels_like}°`;
  weatherHeroTempHigh.textContent = `H: ${hero.high}°`;
  weatherHeroTempLow.textContent = `L: ${hero.low}°`;

  // append DOM
  weatherHeroTempRange.appendChild(weatherHeroTempHigh);
  weatherHeroTempRange.appendChild(weatherHeroTempLow);

  weatherHeroSection.appendChild(weatherHeroLoc);
  weatherHeroSection.appendChild(weatherHeroTemp);
  weatherHeroSection.appendChild(weatherHeroFeelsLike);
  weatherHeroSection.appendChild(weatherHeroTempRange);
}

export function generateDailyForecastComponent(
  weatherData,
  globalMinTemp,
  globalMaxtemp,
  duration,
) {
  const dailyForecastWrapper = document.querySelector(
    '.daily-forecast__wrapper',
  );
  // empty the forecast container
  dailyForecastWrapper.innerHTML = '';

  for (let i = 1; i <= duration; i++) {
    const dailyWeather = weatherData.days[i];
    const dailyForecastComponent = createDailyForecast(
      dailyWeather.datetime,
      dailyWeather.tempmin,
      dailyWeather.tempmax,
      globalMinTemp,
      globalMaxtemp,
    );
    dailyForecastWrapper.appendChild(dailyForecastComponent);
  }
}
