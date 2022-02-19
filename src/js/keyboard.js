import { playSoundButton } from './buttonSounds';
import { keyboardShortcutObj } from './keyboardObj';

function keyboardShortcuts() {
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

function addActiveButtonClass(id) {
  document.getElementById(id).classList.add('buttonActive');
}

function removeActiveButtonClass(id) {
  document.getElementById(id).classList.remove('buttonActive');
}

export { keyboardShortcuts };
