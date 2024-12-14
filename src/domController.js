import backgroundMap from './backgroundMapper';
import getHourValue from './helpers';

export default function renderBackground(icon, sunsetHour, sunriseHour) {
  console.log('rendering background');
  const body = document.querySelector('body');
  const hour = new Date().getHours();

  if (hour === getHourValue(sunsetHour)) {
    body.style.backgroundImage = `url(${backgroundMap.sunset})`;
  } else if (hour === getHourValue(sunriseHour)) {
    body.style.backgroundImage = `url(${backgroundMap.sunrise})`;
  } else {
    body.style.backgroundImage = `url(${backgroundMap[icon] || backgroundMap.default})`;
  }
}
