const scientificModeSwitch = document.getElementById('scientificModeSwitch');
const calculator = document.getElementById('calculator');

function layoutSwitch() {
  scientificModeSwitch.addEventListener('click', () => {
    const calculatorClassList = calculator.classList;

    if (calculatorClassList.contains('normal-layout')) {
      calculatorClassList.remove('normal-layout');
      calculatorClassList.add('scientific-layout');
      scientificModeSwitch.classList.add('active');
    } else if (calculatorClassList.contains('scientific-layout')) {
      calculatorClassList.remove('scientific-layout');
      calculatorClassList.add('normal-layout');
      scientificModeSwitch.classList.remove('active');
    }
  });
}

export default layoutSwitch;
