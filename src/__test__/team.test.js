import { Team } from '../js/Team';
import { Character } from '../js/Character';

test('Должен выдать ошибку, если указано неверное имя', () => {
  expect(() => {
    new Character('J', 'Bowman');
  }).toThrow('Имя должно содержать от 2 до 10 символов');
});

test('Должен создавать объект Character с корректным типом', () => {
  const bowman = new Character('Alice', 'Bowman');
  expect(bowman.type).toBe('Bowman');
});

test('Должен выбрасывать ошибку при недопустимом типе персонажа', () => {
  expect(() => new Character('Alice', 'InvalidType')).toThrowError('Недопустимый тип персонажа');
});

test('Должен добавить персонажа в команду', () => {
  const team = new Team();
  const bowman = new Character('Alice', 'Bowman');
  team.add(bowman);
  expect(team.toArray()).toContain(bowman);
});

test('Не должен позволять добавлять одного персонажа дважды', () => {
  const team = new Team();
  const swordsman = new Character('Andrey', 'Swordsman');
  team.add(swordsman);
  expect(() => team.add(swordsman)).toThrowError('Персонаж уже есть в команде');
});

test('Должен добавить всех персонажей в команду', () => {
  const team = new Team();
  const magician = new Character('Pavel', 'Magician');
  const daemon = new Character('Oleg', 'Daemon');
  team.addAll(magician, daemon);
  expect(team.toArray()).toContain(magician, daemon);
});

test('Должен преобразовать команду в массив', () => {
  const team = new Team();
  const undead = new Character('Maxim', 'Undead');
  const zombie = new Character('Alexey', 'Zombie');
  team.addAll(undead, zombie);
  expect(team.toArray()).toEqual([undead, zombie]);
});
