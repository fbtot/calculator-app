// import { calculatorObj } from './doTheMath';

function openFunction(name) {
  // calculatorObj.function = true;
  return `${name}(`;
}

function openFunctionAngles(name, deg = false) {
  if (deg) {
    return `${name}(`;
  }
  return `${name}(`;
}

function openCloseFunction(name) {
  return `${name}()`;
}

const buttonObj = {
  openParenthesis: {
    mathjs: '(',
    scientific: true,
    display: '',
  },
  closeParenthesis: {
    mathjs: ')',
    scientific: true,
    display: '',
  },
  cancelMemory: {
    mathjs: '',
    scientific: true,
    display: '',
  },
  addToMemory: {
    mathjs: '',
    scientific: true,
    display: '',
  },
  subtractFromMemory: {
    mathjs: '',
    scientific: true,
    display: '',
  },
  recallMemory: {
    mathjs: '',
    scientific: true,
    display: '',
  },
  seven: {
    mathjs: '7',
    scientific: false,
    display: '7',
  },
  eight: {
    mathjs: '8',
    scientific: false,
    display: '8',
  },
  nine: {
    mathjs: '9',
    scientific: false,
    display: '9',
  },
  delete: {
    mathjs: '',
    scientific: false,
    display: '',
  },
  secondFunction: {
    mathjs: '',
    scientific: true,
    display: '',
  },
  powerOfTwo: {
    mathjs: '^2',
    scientific: true,
    display: '',
  },
  powerOfThree: {
    mathjs: '^3',
    scientific: true,
    display: '',
  },
  powerOfY: {
    mathjs: '^',
    scientific: true,
    display: '',
  },
  eToX: {
    mathjs: 'e^',
    scientific: true,
    display: '',
  },
  tenX: {
    mathjs: '10^',
    scientific: true,
    display: '',
  },
  four: {
    mathjs: '4',
    scientific: false,
    display: '4',
  },
  five: {
    mathjs: '5',
    scientific: false,
    display: '5',
  },
  six: {
    mathjs: '6',
    scientific: false,
    display: '6',
  },
  plus: {
    mathjs: '+',
    scientific: false,
    display: '+',
  },
  inverse: {
    mathjs: openFunction('inv'),
    scientific: true,
    display: '-',
  },
  squareRoot: {
    mathjs: openFunction('sqrt'),
    scientific: true,
    display: '',
  },
  cubicRoot: {
    mathjs: openFunction('cbrt'),
    scientific: true,
    display: '',
  },
  // TODO: aggiungere tooltip che spiegano il funzionamento di verti tasti
  yRoot: {
    mathjs: openFunction('nthRoot'),
    scientific: true,
    display: '',
  },
  in: {
    mathjs: openFunction('log'),
    scientific: true,
    display: '',
  },
  /* TODO: dato che in mathjs la base del logaritmo va sempre specificata,
  non seve assegnare più di un tasto ai logaritmi */
  logTen: {
    mathjs: openFunction('log10'),
    scientific: true,
    display: '',
  },
  one: {
    mathjs: '1',
    scientific: false,
    display: '1',
  },
  two: {
    mathjs: '2',
    scientific: false,
    display: '2',
  },
  three: {
    mathjs: '3',
    scientific: false,
    display: '3',
  },
  minus: {
    mathjs: '-',
    scientific: false,
    display: '-',
  },
  factorial: {
    mathjs: '!',
    scientific: true,
    display: '',
  },
  sin: {
    mathjs: openFunction('sin'),
    scientific: true,
    display: '',
  },
  cos: {
    mathjs: openFunction('cos'),
    scientific: true,
    display: '',
  },
  tan: {
    mathjs: openFunction('tan'),
    scientific: true,
    display: '',
  },
  asin: {
    mathjs: openFunction('asin'),
    scientific: true,
    display: '',
  },
  acos: {
    mathjs: openFunction('acos'),
    scientific: true,
    display: '',
  },
  atan: {
    mathjs: openFunction('atan'),
    scientific: true,
    display: '',
  },
  eulersNumber: {
    mathjs: 'e',
    scientific: true,
    display: '',
  },
  // TODO: si potrebbe togliere
  exponentialNotation: {
    mathjs: '',
    scientific: true,
    display: '',
  },
  comma: {
    mathjs: '.',
    scientific: false,
    display: '.',
  },
  zero: {
    mathjs: '0',
    scientific: false,
    display: '0',
  },
  divide: {
    mathjs: '/',
    scientific: false,
    display: '/',
  },
  multiply: {
    mathjs: '*',
    scientific: false,
    display: '*',
  },

  // TODO: si potrebbe togliere
  radial: {
    mathjs: '',
    scientific: true,
    value: false,
    display: '',
  },
  sinh: {
    mathjs: openFunction('sinh'),
    scientific: true,
    display: '',
  },
  cosh: {
    mathjs: openFunction('cosh'),
    scientific: true,
    display: '',
  },
  tanh: {
    mathjs: openFunction('tanh'),
    scientific: true,
    display: '',
  },
  asinh: {
    mathjs: openFunction('asinh'),
    scientific: true,
    display: '',
  },
  acosh: {
    mathjs: openFunction('acosh'),
    scientific: true,
    display: '',
  },
  atanh: {
    mathjs: openFunction('atanh'),
    scientific: true,
    display: '',
  },
  pi: {
    mathjs: 'pi',
    scientific: true,
    display: '',
  },
  random: {
    mathjs: openCloseFunction('random'),
    scientific: true,
    display: '',
  },
  percentage: {
    mathjs: '%',
    scientific: true,
    display: '',
  },
  invertNumber: {
    mathjs: '',
    scientific: true,
    display: '',
  },
  reset: {
    mathjs: '',
    scientific: false,
    display: '',
  },
  equal: {
    mathjs: '(-)',
    scientific: false,
    display: '',
  },
};

export { buttonObj };
