import { nextElement } from './utils';

const bodyEl = document.getElementsByTagName('body')[0];
const themeTitle = document.getElementById('themeTitle');
const themeSwitches = document.getElementsByClassName('header__theme__radio');
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

function setNextTheme() {
  themeTitle.addEventListener('click', () => {
    bodyEl.classList.replace(getCurrentTheme(), nextElement(getCurrentTheme(), themesArray));
  });
}

function setTheme(themeName) {
  bodyEl.classList.replace(getCurrentTheme(), themeName);
}

function setSelectedTheme() {
  Array.from(themeSwitches).forEach((switchEl) => {
    switchEl.addEventListener('click', (e) => {
      e.preventDefault();
      const targetTheme = switchEl.getAttribute('data-theme');
      setTheme(targetTheme);
    });
  });
}

export {
  addtoArr, getCurrentTheme, setNextTheme, setSelectedTheme,
};
