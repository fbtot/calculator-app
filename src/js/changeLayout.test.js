/**
 * @jest-environment jsdom
 */
const { switchClass } = require('./changeLayout');

test('should replace the class "bear" with "moose and viceversa"', () => {
  document.body.innerHTML = '<div id="testElement" class="bear another-class normal-layoutF">';
  const el = document.getElementById('testElement');
  switchClass(el, 'bear', 'moose');
  expect(el.classList).toContain('moose');
  expect(el.classList).toContain('another-class');
  expect(el.classList.length).toBe(3);
  expect(el.classList).not.toContain('bear');

  switchClass(el, 'moose', 'bear');
  expect(el.classList).toContain('bear');
  expect(el.classList).toContain('another-class');
  expect(el.classList.length).toBe(3);
  expect(el.classList).not.toContain('moose');
});
