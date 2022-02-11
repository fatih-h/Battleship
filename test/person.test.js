import Player from '../source/person';

it('Creating two game board', () => {
    let player1 = new Player();
    let player2 = new Player();

    expect(player1.gameboard.arr).toEqual(player2.gameboard.arr);
});