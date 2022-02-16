import '../scss/main.scss';

const scientificModeSwitch = document.getElementById('scientificModeSwitch');
const calculator = document.getElementById('calculator');

scientificModeSwitch.addEventListener('click', () => {
  const calculatorClassList = calculator.classList;

  if (calculatorClassList.contains('normal-layout')) {
    calculatorClassList.remove('normal-layout');
    calculatorClassList.add('scientific-layout');
  } else if (calculatorClassList.contains('scientific-layout')) {
    calculatorClassList.remove('scientific-layout');
    calculatorClassList.add('normal-layout');
  }
});
