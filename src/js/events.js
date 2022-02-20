import playSoundButton from './buttonSounds';
import { addActiveButtonClass, removeActiveButtonClass } from './keyboard';
import keyboardShortcutObj from './keyboardObj';

const buttons = document.getElementsByClassName('button');
function pressKey() {
  window.addEventListener('keydown', (e) => {
    if (e.key in keyboardShortcutObj) {
      const idKey = keyboardShortcutObj[e.key].id;
      addActiveButtonClass(idKey);
      playSoundButton();
    }
  });

  window.addEventListener('keyup', (e) => {
    if (e.key in keyboardShortcutObj) {
      const idKey = keyboardShortcutObj[e.key].id;
      setTimeout(() => removeActiveButtonClass(idKey), 300);
    }
  });
}

function clickKey() {
  Array.from(buttons).forEach((button) => {
    button.addEventListener('click', () => {
      playSoundButton();
    });
  });
}

export { pressKey, clickKey };
