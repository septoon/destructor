import outOfArray from '../src/js/app';

test('description on special', () => {
  const received = {
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
  const expected = [
    {
      id: 7, name: 'Одиночный выстрел', description: 'Описание недоступно', icon: 'http://...',
    },
    {
      id: 8, name: 'Двойной выстрел', description: 'Двойной выстрел наносит двойной урон', icon: 'http://...',
    },
    {
      id: 9, name: 'Тройной выстрел', description: 'Описание недоступно', icon: 'http://...',
    },
  ];

  const result = outOfArray(received);

  expect(result).toEqual(expected);
});
