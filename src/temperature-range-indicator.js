// todo: data to be passed in
const globalMin = 4;
const globalMax = 11;
const localMin = 5;
const localMax = 9;

// Calculate percentages
const globalRange = globalMax - globalMin;
const leftPercent = ((localMin - globalMin) / globalRange) * 100;
const widthPercent = ((localMax - localMin) / globalRange) * 100;

// Set CSS dynamically
const innerBar = document.querySelector('.inner-bar');
innerBar.style.left = `${leftPercent}%`;
innerBar.style.width = `${widthPercent}%`;
