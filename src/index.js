import './search';
import getLocationByIp from './geolocation';
import loadWeather from './weather';

async function initWeather() {
  const data = await getLocationByIp();
  loadWeather(data, 'metric');
}

initWeather();
