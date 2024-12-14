export default function generateFooter(
  location,
  preciseLocalTime,
  roundedTime,
  creds,
) {
  const footerWrapper = document.querySelector('footer');

  footerWrapper.innerHTML = '';

  const weatherDescriptionFooter = document.createElement('p');
  const anchor = document.createElement('a');
  anchor.href = 'https://www.visualcrossing.com/';
  anchor.alt = 'Link to weather API used by this web application';
  anchor.textContent = 'Weather';

  const time = preciseLocalTime || roundedTime;
  console.log(time);
  const textAfterAnchor = document.createTextNode(
    ` in ${location} at ${time} local time`,
  );

  weatherDescriptionFooter.appendChild(anchor);
  weatherDescriptionFooter.appendChild(textAfterAnchor);

  const photoCred = document.createElement('p');
  photoCred.textContent = creds;

  const appLogoCred = document.createElement('a');
  appLogoCred.href = 'https://www.flaticon.com/free-icons/weather-app';
  appLogoCred.title = 'weather app icons';

  // Set the inner text
  appLogoCred.textContent = 'Weather app logo created by Freepik - Flaticon';

  footerWrapper.appendChild(weatherDescriptionFooter);
  footerWrapper.appendChild(photoCred);
  footerWrapper.appendChild(appLogoCred);
}
