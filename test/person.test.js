import Player from '../source/person';

it('Creating two game board', () => {
    let player1 = new Player();
    let player2 = new Player();
    expect(player1.gameboard.arr).toEqual(player2.gameboard.arr);
});

it('attacking others board', () => {
    let player1 = new Player();
    let player2 = new Player();
    player2.gameboard.receiveAttack(5, 6);
    player1.gameboard.receiveAttack(5, 6);
    expect(player1.gameboard.arr).toEqual(player2.gameboard.arr);
});

it('isSunk()', () => {
    let player1 = new Player();
    let player2 = new Player();
    player1.gameboard.coordinates(player1.gameboard.carrier, 'x', 0, 0);
    player1.gameboard.receiveAttack(0, 0);
    player1.gameboard.receiveAttack(1, 0);
    player1.gameboard.receiveAttack(2, 0);
    player1.gameboard.receiveAttack(3, 0);
    player1.gameboard.receiveAttack(4, 0);
    expect(player1.gameboard.carrier.isSunk()).toBe(true);
});




