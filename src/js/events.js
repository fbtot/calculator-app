import playSoundButton from './buttonSounds';
import { updateDisplay } from './display';
import {
  addToOperations, addStringToOperations, removeFromOperations, resetAll,
} from './doTheMath';
import {
  addActiveButtonClass,
  removeActiveButtonClass,
  toggleSecondFunctions,
  removeNextActionButton,
} from './keyboard';
import keyboardShortcutObj from './keyboardObj';
import { calculatorObj } from './calculatorObj';
import { addToMemory, cancelMemory, removeFromMemory } from './memory';

const buttons = document.getElementsByClassName('button');

function pressKey() {
  window.addEventListener('keydown', (e) => {
    if (e.key in keyboardShortcutObj) {
      const idKey = keyboardShortcutObj[e.key].id;
      addActiveButtonClass(idKey);
      playSoundButton();
      keyActions(idKey);
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
      playSoundButton();
      keyActions(idKey);

      console.log(calculatorObj);
    });
  });
}
function keyActions(id) {
  switch (id) {
    case 'delete': {
      removeFromOperations();
      removeNextActionButton();
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
      addToOperations(id);
      updateDisplay();
      break;
    }
    case 'secondFunction': {
      toggleSecondFunctions();
      break;
    }
    case 'exponentialNotation': {
      updateDisplay(calculatorObj.resultEE());
      break;
    }
    case 'cancelMemory': {
      cancelMemory();
      break;
    }
    case 'addToMemory': {
      addToMemory(calculatorObj.result());
      break;
    }
    case 'subtractFromMemory': {
      removeFromMemory(calculatorObj.result());
      break;
    }
    case 'recallMemory': {
      addStringToOperations(calculatorObj.memory);
      updateDisplay();
      break;
    }
    default:
      if (calculatorObj.state === 'stop') resetAll();
      calculatorObj.state = 'running';
      addToOperations(id);
      updateDisplay();
  }
}

export { pressKey, clickKey };
