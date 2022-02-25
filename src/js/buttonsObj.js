function openFunction(name) {
  return `${name}(`;
}

function openCloseFunction(name) {
  return `${name}()`;
}

const buttonObj = {
  openParenthesis: {
    mathjs() { return '('; },
    scientific: true,
    display: '',
  },
  closeParenthesis: {
    mathjs() { return ')'; },
    scientific: true,
    display: '',
  },
  cancelMemory: {
    mathjs() { return ''; },
    scientific: true,
    display: '',
  },
  addToMemory: {
    mathjs() { return ''; },
    scientific: true,
    display: '',
  },
  subtractFromMemory: {
    mathjs() { return ''; },
    scientific: true,
    display: '',
  },
  recallMemory: {
    mathjs() { return ''; },
    scientific: true,
    display: '',
  },
  seven: {
    mathjs() { return '7'; },
    scientific: false,
    display: '7',
  },
  eight: {
    mathjs() { return '8'; },
    scientific: false,
    display: '8',
  },
  nine: {
    mathjs() { return '9'; },
    scientific: false,
    display: '9',
  },
  delete: {
    mathjs() { return ''; },
    scientific: false,
    display: '',
  },
  secondFunction: {
    mathjs() { return ''; },
    scientific: true,
    display: '',
  },
  powerOfTwo: {
    mathjs() { return '^2'; },
    scientific: true,
    display: '',
  },
  powerOfThree: {
    mathjs() { return '^3'; },
    scientific: true,
    display: '',
  },
  powerOfY: {
    mathjs() { return '^'; },
    scientific: true,
    display: '',
  },
  eToX: {
    mathjs() { return 'e^'; },
    scientific: true,
    display: '',
  },
  tenX: {
    mathjs() { return '10^'; },
    scientific: true,
    display: '',
  },
  four: {
    mathjs() { return '4'; },
    scientific: false,
    display: '4',
  },
  five: {
    mathjs() { return '5'; },
    scientific: false,
    display: '5',
  },
  six: {
    mathjs() { return '6'; },
    scientific: false,
    display: '6',
  },
  plus: {
    mathjs() { return '+'; },
    scientific: false,
    display: '+',
  },
  inverse: {
    mathjs() { return openFunction('inv'); },
    scientific: true,
    display: '-',
  },
  squareRoot: {
    mathjs() { return openFunction('sqrt'); },
    scientific: true,
    display: '',
  },
  cubicRoot: {
    mathjs() { return openFunction('cbrt'); },
    scientific: true,
    display: '',
  },
  // TODO: aggiungere tooltip che spiegano il funzionamento di verti tasti
  yRoot: {
    mathjs() { return openFunction('nthRoot'); },
    scientific: true,
    display: '',
  },
  in: {
    mathjs() { return openFunction('log'); },
    scientific: true,
    display: '',
  },
  /* TODO: dato che in mathjs la base del logaritmo va sempre specificata,
  non seve assegnare più di un tasto ai logaritmi */
  logTen: {
    mathjs() { return openFunction('log10'); },
    scientific: true,
    display: '',
  },
  one: {
    mathjs() { return '1'; },
    scientific: false,
    display: '1',
  },
  two: {
    mathjs() { return '2'; },
    scientific: false,
    display: '2',
  },
  three: {
    mathjs() { return '3'; },
    scientific: false,
    display: '3',
  },
  minus: {
    mathjs() { return '-'; },
    scientific: false,
    display: '-',
  },
  factorial: {
    mathjs() { return '!'; },
    scientific: true,
    display: '',
  },
  sin: {
    mathjs() { return openFunction('sin'); },
    scientific: true,
    display: '',
  },
  cos: {
    mathjs() { return openFunction('cos'); },
    scientific: true,
    display: '',
  },
  tan: {
    mathjs() { return openFunction('tan'); },
    scientific: true,
    display: '',
  },
  asin: {
    mathjs() { return openFunction('asin'); },
    scientific: true,
    display: '',
  },
  acos: {
    mathjs() { return openFunction('acos'); },
    scientific: true,
    display: '',
  },
  atan: {
    mathjs() { return openFunction('atan'); },
    scientific: true,
    display: '',
  },
  eulersNumber: {
    mathjs() { return 'e'; },
    scientific: true,
    display: '',
  },
  // TODO: si potrebbe togliere
  exponentialNotation: {
    mathjs() { return ''; },
    scientific: true,
    display: '',
  },
  comma: {
    mathjs() { return '.'; },
    scientific: false,
    display: '.',
  },
  zero: {
    mathjs() { return '0'; },
    scientific: false,
    display: '0',
  },
  divide: {
    mathjs() { return '/'; },
    scientific: false,
    display: '/',
  },
  multiply: {
    mathjs() { return '*'; },
    scientific: false,
    display: '*',
  },

  // TODO: si potrebbe togliere
  radial: {
    mathjs() { return ''; },
    scientific: true,
    value: false,
    display: '',
  },
  sinh: {
    mathjs() { return openFunction('sinh'); },
    scientific: true,
    display: '',
  },
  cosh: {
    mathjs() { return openFunction('cosh'); },
    scientific: true,
    display: '',
  },
  tanh: {
    mathjs() { return openFunction('tanh'); },
    scientific: true,
    display: '',
  },
  asinh: {
    mathjs() { return openFunction('asinh'); },
    scientific: true,
    display: '',
  },
  acosh: {
    mathjs() { return openFunction('acosh'); },
    scientific: true,
    display: '',
  },
  atanh: {
    mathjs() { return openFunction('atanh'); },
    scientific: true,
    display: '',
  },
  pi: {
    mathjs() { return 'pi'; },
    scientific: true,
    display: '',
  },
  random: {
    mathjs() { return openCloseFunction('random'); },
    scientific: true,
    display: '',
  },
  percentage: {
    mathjs() { return '%'; },
    scientific: true,
    display: '',
  },
  invertNumber: {
    mathjs() { return ''; },
    scientific: true,
    display: '',
  },
  reset: {
    mathjs() { return ''; },
    scientific: false,
    display: '',
  },
  equal: {
    mathjs() { return '(-)'; },
    scientific: false,
    display: '',
  },
  deg: {
    mathjs() { return 'deg'; },
  },
};

export { buttonObj };
