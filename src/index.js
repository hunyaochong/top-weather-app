import './search';
import getLocationByIp from './geolocation';
import loadWeather from './weather';

import './styles/weather_hero.css';
import './styles/config.css';

async function initWeather() {
  const data = await getLocationByIp();
  const [city, currentTime] = data;
  loadWeather(city, 'metric');
  // todo: to parse time into domController
}

initWeather();
