import weatherCommentaries from './weatherCommentaries';
import { renderCardComponent } from './renderer';

function generateCommentaries(humidity, cloudcover, visibility, pressure) {
  let humidityCommentaries;
  let cloudCoverCommentaries;
  let visibilityCommentaries;
  let pressureCommentaries;

  if (humidity <= 40) {
    humidityCommentaries = weatherCommentaries.humidity.low;
  } else if (humidity <= 70) {
    humidityCommentaries = weatherCommentaries.humidity.moderate;
  } else if (humidity <= 100) {
    humidityCommentaries = weatherCommentaries.humidity.high;
  } else {
    humidityCommentaries = 'Invalid humidity value.';
  }

  if (cloudcover <= 30) {
    cloudCoverCommentaries = weatherCommentaries.cloudCover.low;
  } else if (cloudcover <= 70) {
    cloudCoverCommentaries = weatherCommentaries.cloudCover.moderate;
  } else if (cloudcover <= 100) {
    cloudCoverCommentaries = weatherCommentaries.cloudCover.high;
  } else {
    cloudCoverCommentaries = 'Invalid cloud cover value.';
  }

  if (visibility <= 5) {
    visibilityCommentaries = weatherCommentaries.visibility.low;
  } else if (visibility <= 10) {
    visibilityCommentaries = weatherCommentaries.visibility.moderate;
  } else if (visibility > 10) {
    visibilityCommentaries = weatherCommentaries.visibility.high;
  } else {
    visibilityCommentaries = 'Invalid visibility value.';
  }

  if (pressure < 1005) {
    pressureCommentaries = weatherCommentaries.pressure.low;
  } else if (pressure < 1020) {
    pressureCommentaries = weatherCommentaries.pressure.moderate;
  } else if (pressure >= 1020) {
    pressureCommentaries = weatherCommentaries.pressure.high;
  } else {
    pressureCommentaries = 'Invalid pressure value.';
  }

  return {
    humidityCommentaries,
    cloudCoverCommentaries,
    visibilityCommentaries,
    pressureCommentaries,
  };
}

export default function generateWeatherCardSection(data) {
  const humidity = data.currentConditions.humidity;
  const windspeed = data.currentConditions.windspeed;
  const cloudcover = data.currentConditions.cloudcover;
  const visibility = data.currentConditions.visibility;
  const pressure = data.currentConditions.pressure;
  const sunrise = data.days[0].sunrise;
  const windDirection = data.currentConditions.winddir;

  const processedMeasurementUnit = {
    sunset: data.days[0].sunset,
    humidity: processPercentageUnit(humidity),
    wind: processWindUnit(windspeed),
    cloudCover: processPercentageUnit(cloudcover),
    visibility: processVisibilityUnit(visibility),
    pressure: processPressureUnit(pressure),
  };

  const commentaries = generateCommentaries(
    humidity,
    cloudcover,
    visibility,
    pressure,
  );

  commentaries.sunsetCommentaries = `Sunrise: ${sunrise}`;
  commentaries.windCommentaries = `The wind is coming from ${processDirectionUnit(windDirection)}`;

  renderCardComponent(processedMeasurementUnit, commentaries);
}

function processPercentageUnit(value) {
  return `${value.toFixed(0)} %`;
}

function processWindUnit(value) {
  return `${value.toFixed(0)} km/h`;
}

function processVisibilityUnit(value) {
  return `${value.toFixed(0)} km`;
}

function processPressureUnit(value) {
  return `${value.toFixed(0)} hPa`;
}

function processDirectionUnit(value) {
  return `${value}°`;
}
