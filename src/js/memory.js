import { evaluate } from 'mathjs';
import { calculatorObj } from './calculatorObj';
import { readDisplayContent } from './display';

function addToMemory() {
  const displayContent = readDisplayContent().replaceAll(',', '');

  calculatorObj.memory = evaluate(`${displayContent} + ${calculatorObj.memory}`);
}

function removeFromMemory() {
  const displayContent = readDisplayContent().replaceAll(',', '');

  calculatorObj.memory = evaluate(`${calculatorObj.memory} - ${displayContent} `);
}

function cancelMemory() {
  calculatorObj.memory = 0;
}

export { addToMemory, removeFromMemory, cancelMemory };
