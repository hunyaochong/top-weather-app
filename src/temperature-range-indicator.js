function renderComponent(localMin, localMax, leftPercent, widthPercent) {
  // Create the outer container <div class="range">
  const rangeDiv = document.createElement('div');
  rangeDiv.className = 'range';

  // Create <span class="min-value">4°</span>
  const minValueSpan = document.createElement('span');
  minValueSpan.className = 'min-value';
  minValueSpan.textContent = `${localMin}°`;

  // Create <div class="bar">
  const barDiv = document.createElement('div');
  barDiv.className = 'bar';

  // Create <div class="inner-bar"></div>
  const innerBarDiv = document.createElement('div');
  innerBarDiv.className = 'inner-bar';

  // Set CSS dynamically
  innerBarDiv.style.left = `${leftPercent}%`;
  innerBarDiv.style.width = `${widthPercent}%`;

  // Append <div class="inner-bar"> into <div class="bar">
  barDiv.appendChild(innerBarDiv);

  // Create <span class="max-value">11°</span>
  const maxValueSpan = document.createElement('span');
  maxValueSpan.className = 'max-value';
  maxValueSpan.textContent = `${localMax}°`;

  // Append all elements into <div class="range">
  rangeDiv.appendChild(minValueSpan);
  rangeDiv.appendChild(barDiv);
  rangeDiv.appendChild(maxValueSpan);

  // Append <div class="range"> to the body (or any specific container)
  return rangeDiv;
}

export default function createTemperatureRange(
  localMin,
  localMax,
  globalMin,
  globalMax,
) {
  // Calculate percentages
  const globalRange = globalMax - globalMin;
  const leftPercent = ((localMin - globalMin) / globalRange) * 100;
  const widthPercent = ((localMax - localMin) / globalRange) * 100;

  renderComponent(localMin, localMax, leftPercent, widthPercent);
}
