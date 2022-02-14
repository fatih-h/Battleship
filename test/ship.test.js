import Ship from '../source/ship';

it('Ship length', () => {
    let ship = new Ship(2);
    expect(ship.length).toBe(2);
});

it('Ship hit()', () => {
    let ship = new Ship(2);
    ship.hit(0);
    expect(ship.section()).toEqual([0, 1]);
});

it('Ship isSunk()', () => {
    let ship = new Ship(2);
    ship.hit(0);
    expect(ship.isSunk()).toBe(false);
});

it('Ship length * hit() then isSunk()', () => {
    let ship = new Ship(2);
    ship.hit(0);
    ship.hit(1);
    expect(ship.isSunk()).toBe(true);
});




