import sunsetIcon from './assets/icon/sunset.svg';
import sunriseIcon from './assets/icon/sunrise.svg';
import cloudyIcon from './assets/icon/cloud.svg';
import lightningIcon from './assets/icon/cloud-lightning.svg';
import rainIcon from './assets/icon/cloud-rain.svg';
import snowIcon from './assets/icon/cloud-snow.svg';
import sunnyIcon from './assets/icon/sun.svg';
import moonIcon from './assets/icon/moon.svg';
import partlyCloudyIcon from './assets/icon/partly-cloudy.svg';

const iconMap = {
  snow: snowIcon,
  rain: rainIcon,
  fog: cloudyIcon,
  wind: cloudyIcon,
  cloudy: cloudyIcon,
  'partly-cloudy-day': partlyCloudyIcon,
  'partly-cloudy-night': moonIcon,
  'clear-day': sunnyIcon,
  'clear-night': moonIcon,
  'snow-showers-day': snowIcon,
  'snow-showers-night': snowIcon,
  'thunder-rain': lightningIcon,
  'thunder-showers-day': lightningIcon,
  'thunder-showers-night': lightningIcon,
  'showers-day': rainIcon,
  'showers-night': rainIcon,
  sunrise: sunriseIcon,
  sunset: sunsetIcon,
};

export default iconMap;
