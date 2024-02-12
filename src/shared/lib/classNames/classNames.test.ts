import { classNames } from './classNames';

describe('classNames', () => {
  test('Only with first parameter', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  test('With additional classes', () => {
    const expected = 'someClass class1 class2';
    expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected);
  });

  test('With mods', () => {
    const expected = 'someClass class1 class2 hovered scrollable';
    expect(classNames('someClass',
      { hovered: true, scrollable: true },
      ['class1', 'class2']))
      .toBe(expected);
  });

  test('With one "false" mod', () => {
    const expected = 'someClass class1 class2 hovered';
    expect(classNames('someClass',
      { hovered: true, scrollable: false },
      ['class1', 'class2']))
      .toBe(expected);
  });

  test('With one "undefined" mod', () => {
    const expected = 'someClass class1 class2 hovered';
    expect(classNames('someClass',
      { hovered: true, scrollable: undefined },
      ['class1', 'class2']))
      .toBe(expected);
  });
});
