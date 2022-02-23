import playSoundButton from './buttonSounds';
import { updateDisplay } from './display';
import {
  addToOperations, calculatorObj, removeFromOperations, resetAll,
} from './doTheMath';
import { addActiveButtonClass, removeActiveButtonClass, toggleSecondFunctions } from './keyboard';
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
    button.addEventListener('click', (e) => {
      const idKey = e.target.closest('.button').id;
      console.log(idKey);
      console.log(calculatorObj);
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
        case 'plus':
        case 'minus':
        case 'multiply':
        case 'divide': {
          if (calculatorObj.state === 'stop') {
            const operationArrLength = calculatorObj.operationArr.length;
            calculatorObj.operationArr.splice(0, operationArrLength, calculatorObj.result());
          }
          calculatorObj.state = 'running';
          addToOperations(idKey);
          updateDisplay();
          break;
        }
        case 'secondFunction': {
          toggleSecondFunctions();
          break;
        }

        default:
          if (calculatorObj.state === 'stop') resetAll();
          calculatorObj.state = 'running';
          addToOperations(idKey);
          updateDisplay();
      }
    });
  });
}

export { pressKey, clickKey };
