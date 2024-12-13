function getDateTime(hms) {
  const now = new Date();
  const nowDateTime = now.toISOString();
  const nowDate = nowDateTime.split('T')[0];
  return new Date(nowDate + 'T' + hms);
}

function getTime(dateTime) {
  return dateTime.getHours();
}

export default function convertHourValue(timeStr) {
  const dateTime = getDateTime(timeStr);
  return getTime(dateTime);
}
