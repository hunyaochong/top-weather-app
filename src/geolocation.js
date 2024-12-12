import { ipGeolocationAPI } from './config';

async function getLocationByIp() {
  const options = { method: 'GET' };

  try {
    const response = await fetch(
      `https://ipgeolocation.abstractapi.com/v1/?api_key=${ipGeolocationAPI}&ip_address=`,
      options,
    );
    const data = await response.json();
    return [data.city, data.timezone.current_time];
  } catch (err) {
    alert(err);
  }
}

export default getLocationByIp;
