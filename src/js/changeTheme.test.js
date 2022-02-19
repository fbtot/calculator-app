import { themesArray, addtoArr } from './changeTheme';

// const element = '<body class="dark-theme"></body>';

jest.mock('./changeTheme.js', () => ({
  // __esModule: true,
  themesArray: ['one', 'two'],
}));
test('test', () => {
  console.log(themesArray);
  // themesArray.mockReturnValue(['one', 'two']);
  const addArr = addtoArr('another-theme');
  console.log(addArr);
});
