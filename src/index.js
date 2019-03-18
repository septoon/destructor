/* eslint-disable no-console */
import outOfArray from './js/app';

const character = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [
    {
      id: 7,
      name: 'Одиночный выстрел',
      icon: 'http://...',
    },
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 9,
      name: 'Тройной выстрел',
      icon: 'http://...',
    },
  ],
};

const result = outOfArray(character);

console.log(result);
