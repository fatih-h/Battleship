import Gameboard from '../source/gameboard';

it('Gameboard length', () => {
    let gameboard = new Gameboard();
    expect(gameboard.length).toBe(100);
});

it('Gameboard checks ships', () => {
    let gameboard = new Gameboard();

    expect(gameboard.ship.carrier.length).toBe(5);
    expect(gameboard.ship.battleship.length).toBe(4);
    expect(gameboard.ship.destroyer.length).toBe(3);
    expect(gameboard.ship.submarine.length).toBe(3);
    expect(gameboard.ship.patrolboat.length).toBe(2);

});

it('Gameboard receiveAttack(x, y)', () => {
    let gameboard = new Gameboard();
    gameboard.receiveAttack(0, 0);
    expect(gameboard.board()[0][0]).toEqual({x: 0, y: 0, safe: true});
});

it('Gameboard placement and receive attack', () => {
    let gameboard = new Gameboard();
    gameboard.put(gameboard.ship.carrier, 0, 0);
    gameboard.receiveAttack(0, 0);
    expect(gameboard.ship.carrier.section()).toEqual([0, 1, 1, 1, 1]);
});

it('Gameboard y placement', () => {
    let gameboard = new Gameboard();
    gameboard.axis();
    gameboard.put(gameboard.ship.patrolboat, 0, 0);
    gameboard.receiveAttack(0, 1);
    expect(gameboard.ship.patrolboat.section()).toEqual([1, 0]);        
});

it('Gameboard ships coordinats after placement', () => {
    let gameboard = new Gameboard();
    gameboard.put(gameboard.ship.carrier, 0, 0);
    gameboard.axis(); 
    gameboard.put(gameboard.ship.battleship, 8, 0);
    gameboard.put(gameboard.ship.destroyer, 4, 3);
    gameboard.axis();
    gameboard.put(gameboard.ship.submarine, 7, 7);
    gameboard.put(gameboard.ship.patrolboat, 3, 1);
    
});