import { addtoArr, getCurrentTheme } from './changeTheme';

const element = '<body class="one another class"></body>';

jest.mock('./changeTheme.js', () => ({
  // __esModule: true,
  themesArray: ['one', 'two'],
  addtoArr: jest.fn((ddd) => ['one', 'two', ddd]),
  bodyEl: '<body class="one another class"></body>',
  getCurrentTheme: jest.fn(() => 'one'),
}));

test('test', () => {
  expect(addtoArr('another-theme')).toEqual(['one', 'two', 'another-theme']);
});

test('should output "moose"', () => {
  expect(getCurrentTheme()).toBeTruthy();
  expect(getCurrentTheme()).toBe('one');
  expect(getCurrentTheme()).not.toBe('two');
});
