import playSoundButton from './buttonSounds';
import { updateDisplay } from './display';
import {
  addToOperations, calculatorObj, removeFromOperations, resetAll,
} from './doTheMath';
import { addActiveButtonClass, removeActiveButtonClass } from './keyboard';
import keyboardShortcutObj from './keyboardObj';

const buttons = document.getElementsByClassName('button');
function pressKey() {
  window.addEventListener('keydown', (e) => {
    if (e.key in keyboardShortcutObj) {
      const idKey = keyboardShortcutObj[e.key].id;
      addActiveButtonClass(idKey);
      playSoundButton();
      addToOperations(idKey);
      updateDisplay();
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
    button.addEventListener('click', (e) => {
      const idKey = e.target.closest('.button').id;
      console.log(idKey);
      console.log(calculatorObj.operationArr);
      playSoundButton();

      switch (idKey) {
        case 'delete': {
          removeFromOperations();
          updateDisplay();
          break;
        }
        case 'equal': {
          updateDisplay(calculatorObj.result());
          calculatorObj.state = 'stop';
          break;
        }
        case 'reset': {
          resetAll();
          updateDisplay();
          break;
        }

        default:
          if (calculatorObj.state == 'stop') resetAll();
          calculatorObj.state = 'running';
          addToOperations(idKey);
          updateDisplay();
      }
    });
  });
}

export { pressKey, clickKey };
