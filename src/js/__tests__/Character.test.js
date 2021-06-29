
import Character from '../Character';

test('создание классa', () => {
  expect(new Character('Petr', 'Zombie')).toEqual({
    name: 'Petr',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 10,
    defence: 10,
  });
});

test('Выброс ошибки в случае typeof this.name !== string', () => {
  expect(() => new Character(123, 'Bowman')).toThrow();
});


test('Выброс ошибки в случае this.name.length < 2', () => {
  expect(() => new Character('O', 'Bowman')).toThrow();
});


test('Выброс ошибки в случае this.name.length > 10', () => {
  expect(() => new Character('OUHJNNNJJJJRTCFF156238975', 'Bowman')).toThrow();
});

test('Выброс ошибки в случае отличном от this.type', () => {
  expect(() => new Character('Dima', 'Man')).toThrow();
});

// test('Выброс ошибки , () => {  expect(() => new Character(123, 'Bow2356man')).
// toThrowError(new Error('Некорректные значения!')); });
test('method levelUp', () => {
  const zombie = new Character('Petr', 'Zombie');
  zombie.health = 40;
  zombie.levelUp();
  expect(zombie).toEqual({
    name: 'Petr',
    type: 'Zombie',
    health: 100,
    level: 2,
    attack: 12,
    defence: 12,
  });
});
test('выброс ошибки при health = 0', () => {
  const zombie = new Character('Petr', 'Zombie');
  zombie.health = 0;
  expect(() => zombie.levelUp()).toThrow();
});
test('damage(points)', () => {
  const zombie = new Character('Petr', 'Zombie');
  zombie.damage(10);
  expect(zombie.health).toBe(91);
});
test('damage(points) health < 0', () => {
  const zombie = new Character('Petr', 'Zombie');
  zombie.health = -25;
  zombie.damage(10);
  expect(zombie.health).toBe(0);
});
