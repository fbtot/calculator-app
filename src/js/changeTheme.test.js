import { addtoArr } from './changeTheme';

// const element = '<body class="dark-theme"></body>';

jest.mock('./changeTheme.js', () => ({
  // __esModule: true,
  themesArray: ['one', 'two'],
  addtoArr: jest.fn((ddd) => ['one', 'two', ddd]),
}));

test('test', () => {
  expect(addtoArr('another-theme')).toEqual(['one', 'two', 'another-theme']);
});
