import '../scss/main.scss';
import { layoutSwitch } from './changeLayout';
import { setNextTheme, setSelectedTheme } from './changeTheme';
import { buttonSoundEffects } from './buttonSounds';
import { keyboardShortcuts } from './keyboard';

layoutSwitch();
setNextTheme();
setSelectedTheme();
buttonSoundEffects();
keyboardShortcuts();
