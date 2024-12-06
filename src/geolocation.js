import { ipGeolocationAPI } from './config';

async function getLocationByIp() {
  const options = { method: 'GET' };

  try {
    const response = await fetch(
      `https://ipgeolocation.abstractapi.com/v1/?api_key=${ipGeolocationAPI}&ip_address=&fields=country,city`,
      options,
    );
    const data = await response.json();
    return data.city;
  } catch (err) {
    alert(err);
  }
}

export default getLocationByIp;
