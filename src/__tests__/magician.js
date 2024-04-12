import Magician from '../js/magician';

test('character creation Magician', () => {
  const unit = new Magician('John', 'Magician');
  const result = {
    name: 'John',
    type: 'Magician',
    health: 100,
    level: 1,
    distance: 1,
    base_attack: 100,
    defence: 40,
  };
  expect(unit).toEqual(result);
});

test('Не верный тип Magician', () => {
  expect(() => new Magician('Ror', 'Zerg')).toThrow();
});

test('testing length "name"', () => {
  expect(() => new Magician('Bollivariuson', 'Magician')).toThrow();
});

test('testing length "name"', () => {
  expect(() => new Magician('w', 'Magician')).toThrow();
});

test('testing type "name"', () => {
  expect(() => new Magician(123, 'Magician')).toThrow();
});
