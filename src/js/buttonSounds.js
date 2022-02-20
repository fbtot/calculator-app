import { selectRandomElement } from './utils';
import soundOne from '../buttonsAudio/01.mp3';
import soundTwo from '../buttonsAudio/02.mp3';
import soundThree from '../buttonsAudio/03.mp3';
import soundFour from '../buttonsAudio/04.mp3';
import soundFive from '../buttonsAudio/05.mp3';

const buttonSounds = [
  soundOne, soundTwo, soundThree, soundFour, soundFive,
];

function playSoundButton() {
  const buttonSound = new Audio(selectRandomElement(buttonSounds));
  buttonSound.play();
}

export default playSoundButton;
