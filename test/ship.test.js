import Ship from '../source/ship';



it('Carrier', () => {
    let carrier = new Ship(5);
    expect(carrier.arr).toEqual([1,1,1,1,1]);
});

it('battleship', () => {
    let battleship = new Ship(4);
    expect(battleship.arr).toEqual([1,1,1,1]);
});

it('destroyer', () => {
    let destroyer = new Ship(4);
    expect(destroyer.arr).toEqual([1,1,1,1]);
});

it('submarine', () => {
    let submarine = new Ship(3);
    expect(submarine.arr).toEqual([1,1,1]);
});

it('patrolBoat', () => {
    let patrolBoat = new Ship(2);
    expect(patrolBoat.arr).toEqual([1,1]);
});

it('Carrier length(5)', () => {
    let carrier = new Ship(5);
    expect(carrier.length).toBe(5);
    
});

it('battleship length(4)', () => {
    let battleship = new Ship(4);
    expect(battleship.length).toBe(4);
    
});

it('destroyer length(4)', () => {
    let destroyer = new Ship(4);
    expect(destroyer.length).toBe(4);
    
});

it('submarine length(3)', () => {
    let submarine = new Ship(3);
    expect(submarine.length).toBe(3);
    
});

it('patrolBoat length(2)', () => {
    let patrolBoat = new Ship(2);
    expect(patrolBoat.length).toBe(2);
    
});


it('Carrier hit(index) looking for damage in that part', () => {
    let carrier = new Ship(5);
    expect(carrier.hit(3)).toEqual([1,1,1,0,1]);
});

it('battleship hit(index) looking for damage in that part', () => {
    let battleship = new Ship(4);
    expect(battleship.hit(1)).toEqual([1,0,1,1]);
});

it('destroyer hit(index) looking for damage in that part', () => {
    let destroyer = new Ship(4);
    expect(destroyer.hit(0)).toEqual([0,1,1,1]);
});

it('submarine hit(index) looking for damage in that part', () => {
    let submarine = new Ship(3);
    expect(submarine.hit(2)).toEqual([1,1,0]);
});

it('patrolBoat hit(index) looking for damage in that part', () => {
    let patrolBoat = new Ship(2);
    expect(patrolBoat.hit(1)).toEqual([1,0]);
});

it('Carrier hit() twice and isSunk()', () => {
    let carrier = new Ship(5);
    carrier.hit(0);
    carrier.hit(1);
    expect(carrier.isSunk()).toBe(false);
});

it('battleship hit() twice and isSunk()', () => {
    let battleship = new Ship(4);
    battleship.hit(0);
    battleship.hit(1);
    expect(battleship.isSunk()).toBe(false);
});

it('destroyer hit() twice and isSunk()', () => {
    let destroyer = new Ship(4);
    destroyer.hit(0);
    destroyer.hit(1);
    expect(destroyer.isSunk()).toBe(false);
});

it('submarine hit() twice and isSunk()', () => {
    let submarine = new Ship(3);
    submarine.hit(0);
    submarine.hit(1);
    expect(submarine.isSunk()).toBe(false);
});

it('patrolBoat hit() twice and isSunk()', () => {
    let patrolBoat = new Ship(2);
    patrolBoat.hit(0);
    patrolBoat.hit(1);
    expect(patrolBoat.isSunk()).toBe(true);
});

it('Carrier hit all and isSunk()', () => {
    let carrier = new Ship(5);
    carrier.hit(0);
    carrier.hit(1);
    expect(carrier.isSunk()).toBe(false);
    carrier.hit(2);
    carrier.hit(3);
    carrier.hit(4);
    expect(carrier.isSunk()).toBe(true);
});

it('battleship hit all and isSunk()', () => {
    let battleship = new Ship(4);
    battleship.hit(0);
    battleship.hit(1);
    expect(battleship.isSunk()).toBe(false);
    battleship.hit(2);
    battleship.hit(3);
    expect(battleship.isSunk()).toBe(true);
});

it('destroyer hit all and isSunk()', () => {
    let destroyer = new Ship(4);
    destroyer.hit(0);
    destroyer.hit(1);
    expect(destroyer.isSunk()).toBe(false);
    destroyer.hit(2);
    destroyer.hit(3);
    expect(destroyer.isSunk()).toBe(true);
});

it('submarine hit all and isSunk()', () => {
    let submarine = new Ship(3);
    submarine.hit(0);
    submarine.hit(1);
    expect(submarine.isSunk()).toBe(false);
    submarine.hit(2);
    expect(submarine.isSunk()).toBe(true);
});

it('patrolBoat hit all and isSunk()', () => {
    let patrolBoat = new Ship(2);
    patrolBoat.hit(0);
    patrolBoat.hit(1);
    expect(patrolBoat.isSunk()).toBe(true);
});



