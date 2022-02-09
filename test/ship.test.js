import Ship from '../source/ship';

let carrier = new Ship(5);

it('Carrier', () => {
    expect(carrier.arr).toEqual([1,1,1,1,1]);
});

it('Carrier length(5)', () => {
    
    expect(carrier.length).toBe(5);
    
});

it('Carrier hit(index) looking for damage in that part', () => {
    expect(carrier.hit(3)).toEqual([1,1,1,0,1]);
});

it('Carrier hit() twice and isSunk()', () => {
    carrier.hit(0);
    carrier.hit(1);
    expect(carrier.isSunk()).toBe(false);
});

it('Carrier hit all and isSunk()', () => {
    carrier.hit(0);
    carrier.hit(1);
    expect(carrier.isSunk()).toBe(false);
    carrier.hit(2);
    carrier.hit(3);
    carrier.hit(4);
    expect(carrier.isSunk()).toBe(true);
});



