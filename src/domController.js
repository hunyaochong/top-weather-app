export function createSearchResult(stringifiedLoc) {
  const searchResultItem = document.createElement('li');
  searchResultItem.textContent = stringifiedLoc;
  return searchResultItem;
}
