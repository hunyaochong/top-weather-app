import partialCloudImg from './assets/img/partial-cloud.jpg';
import snowImg from './assets/img/snow.jpg';
import rainImg from './assets/img/rainy.jpg';
import fogImg from './assets/img/fog.jpg';
import clearNightImg from './assets/img/clear-night.jpg';
import cloudyImg from './assets/img/cloudy-night.jpg';
import sunriseImg from './assets/img/sunrise.jpg';
import sunsetImg from './assets/img/sunset.jpg';

const backgroundMap = {
  snow: snowImg,
  rain: rainImg,
  fog: fogImg,
  wind: partialCloudImg,
  cloudy: cloudyImg,
  'partly-cloudy-day': partialCloudImg,
  'partly-cloudy-night': clearNightImg,
  'clear-day': partialCloudImg,
  'clear-night': clearNightImg,
  'snow-showers-day': snowImg,
  'snow-showers-night': snowImg,
  'thunder-rain': rainImg,
  'thunder-showers-day': rainImg,
  'thunder-showers-night': rainImg,
  'showers-day': rainImg,
  'showers-night': rainImg,
  sunrise: sunriseImg,
  sunset: sunsetImg,
  default: partialCloudImg,
};

export default backgroundMap;
