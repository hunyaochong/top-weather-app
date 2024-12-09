import './search';
import getLocationByIp from './geolocation';
import loadWeather from './weather';
import './styles/reset.css';
import './styles/config.css';
import './styles/global.css';
import './styles/header.css';
import './styles/hero.css';
import './styles/search_form.css';
import './styles/weather_grid.css';
import './styles/temperature_range_indicator.css';
import './styles/hourly_forecast.css';
import './styles/footer.css';

async function initWeather() {
  const data = await getLocationByIp();
  const [city, currentTime] = data;
  loadWeather(city, 'metric');
  // todo: to parse time into domController
}

initWeather();
