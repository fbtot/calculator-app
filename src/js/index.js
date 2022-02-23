import '../scss/main.scss';
import { layoutSwitch } from './changeLayout';
import { setNextTheme, setSelectedTheme } from './changeTheme';
import { pressKey, clickKey } from './events';

layoutSwitch();
setNextTheme();
setSelectedTheme();
pressKey();
clickKey();
