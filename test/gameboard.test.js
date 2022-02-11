
import Gameboard from '../source/gameboard';
import Ship from '../source/ship';


it('gameboard length 10 x 10', () => {
    let gameboard = new Gameboard(10, 10);
    expect(gameboard.length).toBe(100);
});

it('gameboard coordinates (x)', () => {
    let gameboard = new Gameboard(10, 10);
    gameboard.coordinates(gameboard.carrier, 'x', 3, 4);
    expect(gameboard.arr).toEqual(
        [
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, {ship: gameboard.carrier, position: 0, value:1}, {ship: gameboard.carrier, position: 1, value:1}, {ship: gameboard.carrier, position: 2, value:1}, {ship: gameboard.carrier, position: 3, value:1}, {ship: gameboard.carrier, position: 4, value:1}, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null]
        ]
    )
});

it('gameboard coordinates (y)', () => {
    let gameboard = new Gameboard(10, 10);
    gameboard.coordinates(gameboard.submarine, 'y', 1, 5);
    expect(gameboard.arr).toEqual(
        [
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, {ship: gameboard.submarine, position: 0, value:1}, null, null, null, null, null, null, null, null],
            [null, {ship: gameboard.submarine, position: 1, value:1}, null, null, null, null, null, null, null, null],
            [null, {ship: gameboard.submarine, position: 2, value:1}, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null]
        ]
    )
});

it('gameboard coordinates (x & y)', () => {
    let gameboard = new Gameboard(10, 10);
    gameboard.coordinates(gameboard.submarine, 'y', 1, 5);
    gameboard.coordinates(gameboard.carrier, 'x', 3, 7);
    gameboard.coordinates(gameboard.patrolBoat, 'y', 9, 0);

    expect(gameboard.arr).toEqual(
        [
            [null, null, null, null, null, null, null, null, null, {ship: gameboard.patrolBoat, position: 0, value:1}],
            [null, null, null, null, null, null, null, null, null, {ship: gameboard.patrolBoat, position: 1, value:1}],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, {ship: gameboard.submarine, position: 0, value:1}, null, null, null, null, null, null, null, null],
            [null, {ship: gameboard.submarine, position: 1, value:1}, null, null, null, null, null, null, null, null],
            [null, {ship: gameboard.submarine, position: 2, value:1}, null, {ship: gameboard.carrier, position: 0, value:1}, {ship: gameboard.carrier, position: 1, value:1}, {ship: gameboard.carrier, position: 2, value:1}, {ship: gameboard.carrier, position: 3, value:1}, {ship: gameboard.carrier, position: 4, value:1}, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null]
        ]
    )
});

it('gameboard coordinates with full of ships', () => {
    let gameboard = new Gameboard(10, 10);
    gameboard.coordinates(gameboard.carrier, 'y', 1, 3);
    gameboard.coordinates(gameboard.battleship, 'x', 3, 4);
    gameboard.coordinates(gameboard.destroyer, 'x', 5, 7);
    gameboard.coordinates(gameboard.submarine, 'y', 9, 2);
    gameboard.coordinates(gameboard.patrolBoat, 'y', 9, 8);
    expect(gameboard.arr).toEqual(
        [
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, {ship: gameboard.submarine, position: 0, value:1}],
            [null, {ship: gameboard.carrier, position: 0, value:1}, null, null, null, null, null, null, null, {ship: gameboard.submarine, position: 1, value:1}],
            [null, {ship: gameboard.carrier, position: 1, value:1}, null, {ship: gameboard.battleship, position: 0, value:1}, {ship: gameboard.battleship, position: 1, value:1}, {ship: gameboard.battleship, position: 2, value:1}, {ship: gameboard.battleship, position: 3, value:1}, null, null, {ship: gameboard.submarine, position: 2, value:1}],
            [null, {ship: gameboard.carrier, position: 2, value:1}, null, null, null, null, null, null, null, null],
            [null, {ship: gameboard.carrier, position: 3, value:1}, null, null, null, null, null, null, null, null],
            [null, {ship: gameboard.carrier, position: 4, value:1}, null, null, null, {ship: gameboard.destroyer, position: 0, value:1}, {ship: gameboard.destroyer, position: 1, value:1}, {ship: gameboard.destroyer, position: 2, value:1}, {ship: gameboard.destroyer, position: 3, value:1}, null],
            [null, null, null, null, null, null, null, null, null, {ship: gameboard.patrolBoat, position: 0, value:1}],
            [null, null, null, null, null, null, null, null, null, {ship: gameboard.patrolBoat, position: 1, value:1}]
        ]
    )
});

it('receiveAttack test', () => {
    let gameboard = new Gameboard(10, 10);
    gameboard.coordinates(gameboard.destroyer, 'y', 0, 0);
    gameboard.receiveAttack(0,3);
    expect(gameboard.arr).toEqual(
        [
            [{ship: gameboard.destroyer, position: 0, value:1}, null, null, null, null, null, null, null, null, null],
            [{ship: gameboard.destroyer, position: 1, value:1}, null, null, null, null, null, null, null, null, null],
            [{ship: gameboard.destroyer, position: 2, value:1}, null, null, null, null, null, null, null, null, null],
            [{ship: gameboard.destroyer, position: 3, value:0}, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null] 
        ]
    )
});

it('receiveAttack and ship hit function', () => {
    let gameboard = new Gameboard(10, 10);
    gameboard.coordinates(gameboard.submarine, 'x', 4, 2);
    gameboard.receiveAttack(6,2);
    expect(gameboard.submarine.arr).toEqual([1,1,0]);
});

it('receiveAttack and hit all for isSunk function', () => {
    let gameboard = new Gameboard(10, 10);
    gameboard.coordinates(gameboard.patrolBoat, 'y', 5, 8);
    gameboard.receiveAttack(5,8);
    gameboard.receiveAttack(5,9);
    expect(gameboard.patrolBoat.isSunk()).toEqual(true);
});

it('for null area', () => {
    let gameboard = new Gameboard(10, 10);
    gameboard.coordinates(gameboard.battleship, 'x', 3,7);
    gameboard.receiveAttack(1,2);
    expect(gameboard.arr[2][1]).toBe(undefined);
});

it('isSunk for all ships', () => {
    let gameboard = new Gameboard(10, 10);
    gameboard.coordinates(gameboard.carrier, 'y', 0, 0);
    gameboard.coordinates(gameboard.battleship, 'x', 4, 1);
    gameboard.coordinates(gameboard.destroyer, 'x', 6, 7);
    gameboard.coordinates(gameboard.submarine, 'y', 3, 4);
    gameboard.coordinates(gameboard.patrolBoat, 'y', 1, 7);

    gameboard.receiveAttack(4, 8);
    gameboard.receiveAttack(5, 1);
    gameboard.receiveAttack(7, 3);
    expect(gameboard.arr).toEqual(
        [
            [{ship: gameboard.carrier, position: 0, value:1}, null, null, null, null, null, null, null, null, null],
            [{ship: gameboard.carrier, position: 1, value:1}, null, null, null, {ship: gameboard.battleship, position: 0, value:1}, {ship: gameboard.battleship, position: 1, value:0}, {ship: gameboard.battleship, position: 2, value:1}, {ship: gameboard.battleship, position: 3, value:1}, null, null],
            [{ship: gameboard.carrier, position: 2, value:1}, null, null, null, null, null, null, null, null, null],
            [{ship: gameboard.carrier, position: 3, value:1}, null, null, null, null, null, null, undefined, null, null],
            [{ship: gameboard.carrier, position: 4, value:1}, null, null, {ship: gameboard.submarine, position: 0, value:1}, null, null, null, null, null, null],
            [null, null, null, {ship: gameboard.submarine, position: 1, value:1}, null, null, null, null, null, null],
            [null, null, null, {ship: gameboard.submarine, position: 2, value:1}, null, null, null, null, null, null],
            [null, {ship: gameboard.patrolBoat, position: 0, value:1}, null, null, null, null, {ship: gameboard.destroyer, position: 0, value:1}, {ship: gameboard.destroyer, position: 1, value:1}, {ship: gameboard.destroyer, position: 2, value:1}, {ship: gameboard.destroyer, position: 3, value:1}],
            [null, {ship: gameboard.patrolBoat, position: 1, value:1}, null, null, undefined, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null]
        ]
    )
});