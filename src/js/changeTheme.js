const bodyEl = document.getElementsByClassName('body')[0];
const themesArray = ['dark-theme', 'light-theme', 'twilight-theme'];

function addtoArr(elementToAdd) {
  return [...themesArray, elementToAdd];
}

/**
 * THEME SWITCHER
 * Tema attuale
 * trovare il tema attuale in themesArray
 * impostare il tema successivo come array
 */

function getCurrentTheme() {
  return themesArray.filter((className) => bodyEl.classList.contains(className)).join();
}

export { addtoArr, getCurrentTheme };
