import { showHP, sortHeroes } from '../app';

test.each([
    ['healthy', {name: 'Маг', health: 90}, 'healthy'],
    ['wounded', {name: 'Маг', health: 40}, 'wounded'],
    ['critical', {name: 'Маг', health: 10}, 'critical']
])(
    ('should show color HP in case health %i'),
    (_, health, expected) => {
        const hp = showHP(health);
        expect(hp).toBe(expected);
    }
)

test('sort', () => {
    const arr = [
        {name: 'мечник', health: 10},
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
    ]
    const sortArr = sortHeroes(arr);
     expect(sortArr).toEqual([
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
        {name: 'мечник', health: 10}
    ]);
})

