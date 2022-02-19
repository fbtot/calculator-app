import { nextElement } from './utils';

test('should retrieve the element next to the one provided', () => {
  const arr = ['moose', 'rooster', 'bear'];

  expect(nextElement('moose', arr)).toBe('rooster');
  expect(nextElement('bear', arr)).toBe('moose');
  expect(nextElement('eagle', arr)).toBe('');
});
