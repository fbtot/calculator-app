const themesArray = ['datk-theme', 'light-theme', 'twilight-theme'];

function addtoArr(elementToAdd) {
  return [...themesArray, elementToAdd];
}

export { themesArray, addtoArr };
