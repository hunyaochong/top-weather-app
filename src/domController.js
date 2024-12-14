import backgroundMap from './backgroundMapper';
import getHourValue from './helpers';

export default function renderBackground(icon, sunsetHour, sunriseHour) {
  const body = document.querySelector('body');
  const hour = new Date().getHours();
  let footerCreds;
  if (hour === getHourValue(sunsetHour)) {
    body.style.backgroundImage = `url(${backgroundMap.sunset.src})`;
    footerCreds = backgroundMap.sunset.creds;
  } else if (hour === getHourValue(sunriseHour)) {
    body.style.backgroundImage = `url(${backgroundMap.sunrise.src})`;
    footerCreds = backgroundMap.sunnrise.creds;
  } else {
    body.style.backgroundImage = `url(${backgroundMap[icon].src || backgroundMap.default.src})`;
    footerCreds = backgroundMap[icon].creds || backgroundMap.default.creds;
  }

  return footerCreds;
}
