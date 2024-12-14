import partialCloudImg from './assets/img/partial-cloud.jpg';
import snowImg from './assets/img/snow.png';
import rainImg from './assets/img/rainy.jpg';
import fogImg from './assets/img/fog.jpg';
import clearNightImg from './assets/img/clear-night.jpg';
import cloudyImg from './assets/img/cloudy-night.jpg';
import sunriseImg from './assets/img/sunrise.jpg';
import sunsetImg from './assets/img/sunset.jpg';

const imgCreds = {
  partialCloud: 'Background image by Priya Bhagtani on Unsplash',
  snow: 'Background image by Todd Diemer on Unsplash',
  rain: 'Background image by Taqqy RB on Unsplash',
  fog: 'Background image by Milin John on Unsplash',
  clearNight: 'Background image by Wes Hicks on Unsplash',
  cloudy: 'Background image by Anandu Vinod on Unsplash',
  sunrise: 'Background image by Linus Nylund on Unsplash',
  sunset: 'Background image by Hans Isaacson on Unsplash',
};

const backgroundMap = {
  snow: { src: snowImg, creds: imgCreds.snow },
  rain: { src: rainImg, creds: imgCreds.rain },
  fog: { src: fogImg, creds: imgCreds.fog },
  wind: { src: partialCloudImg, creds: imgCreds.partialCloud },
  cloudy: { src: cloudyImg, creds: imgCreds.cloudyImg },
  'partly-cloudy-day': {
    src: partialCloudImg,
    creds: imgCreds.partialCloudImg,
  },
  'partly-cloudy-night': { src: clearNightImg, creds: imgCreds.clearNight },
  'clear-day': { src: partialCloudImg, creds: imgCreds.partialCloud },
  'clear-night': { src: clearNightImg, creds: imgCreds.clearNight },
  'snow-showers-day': { src: snowImg, creds: imgCreds.snow },
  'snow-showers-night': { src: snowImg, creds: imgCreds.snow },
  'thunder-rain': { src: rainImg, creds: imgCreds.rain },
  'thunder-showers-day': { src: rainImg, creds: imgCreds.rain },
  'thunder-showers-night': { src: rainImg, creds: imgCreds.rain },
  'showers-day': { src: rainImg, creds: imgCreds.rain },
  'showers-night': { src: rainImg, creds: imgCreds.rain },
  sunrise: { src: sunriseImg, creds: imgCreds.sunrise },
  sunset: { src: sunsetImg, creds: imgCreds.sunset },
  default: { src: partialCloudImg, creds: imgCreds.partialCloud },
};

export default backgroundMap;
