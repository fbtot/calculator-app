import { selectRandomElement } from './utils';
import one from '../buttonsAudio/01.mp3';
import two from '../buttonsAudio/02.mp3';
import three from '../buttonsAudio/03.mp3';
import four from '../buttonsAudio/04.mp3';
import five from '../buttonsAudio/05.mp3';

const buttons = document.getElementsByClassName('button');
const buttonSounds = [
  one, two, three, four, five,
];

function buttonSoundEffects() {
  Array.from(buttons).forEach((button) => {
    button.addEventListener('click', () => {
      playSoundButton();
    });
  });
}

function playSoundButton() {
  const buttonSound = new Audio(selectRandomElement(buttonSounds));
  buttonSound.play();
}

export { buttonSoundEffects };
