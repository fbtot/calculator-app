const scientificModeSwitch = document.getElementById('scientificModeSwitch');
const calculator = document.getElementById('calculator');

function layoutSwitch() {
  scientificModeSwitch.addEventListener('click', () => {
    switchClass(calculator, 'normal-layout', 'scientific-layout');
    scientificModeSwitch.classList.toggle('active');
  });
}

function switchClass(element, class1, class2) {
  if (element.classList.contains(class1)) {
    element.classList.replace(class1, class2);
  } else if (element.classList.contains(class2)) {
    element.classList.replace(class2, class1);
  }
}

export { switchClass, layoutSwitch };
