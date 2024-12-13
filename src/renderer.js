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

export function renderDailyForecastComponent(
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
      dailyWeather.tempmin.toFixed(1),
      dailyWeather.tempmax.toFixed(1),
      globalMinTemp,
      globalMaxtemp,
    );
    dailyForecastWrapper.appendChild(dailyForecastComponent);
  }
}

export function renderCardComponent(units, commentaries) {
  const sunsetWrapper = document.querySelector('.sunset');
  generateCardComponent(
    units.sunset,
    commentaries.sunsetCommentaries,
    sunsetWrapper,
  );

  const humidityWrapper = document.querySelector('.humidity');
  generateCardComponent(
    units.humidity,
    commentaries.humidityCommentaries,
    humidityWrapper,
  );

  const windWrapper = document.querySelector('.wind');
  generateCardComponent(units.wind, commentaries.windCommentaries, windWrapper);

  const cloudCoverWrapper = document.querySelector('.cloud-cover');
  generateCardComponent(
    units.cloudCover,
    commentaries.cloudCoverCommentaries,
    cloudCoverWrapper,
  );

  const visibilityWrapper = document.querySelector('.visibility');
  generateCardComponent(
    units.visibility,
    commentaries.visibilityCommentaries,
    visibilityWrapper,
  );

  const pressureWrapper = document.querySelector('.pressure');
  generateCardComponent(
    units.pressure,
    commentaries.pressureCommentaries,
    pressureWrapper,
  );
}

function generateCardComponent(data, commentaries, wrapper) {
  // todo: adjust sunset icon
  const infoSpan = wrapper.querySelector('.weather-misc__info');
  const commentaryEle = wrapper.querySelector('p');
  infoSpan.textContent = data;
  commentaryEle.textContent = commentaries;
}
