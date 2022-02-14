import Ship from './ship';

function Gameboard(m, n){
    
    let carrier = new Ship(5);
    let battleship = new Ship(4);
    let destroyer = new Ship(4);
    let submarine = new Ship(3);
    let patrolBoat = new Ship(2);

    const length = m * n;

    let arr = new Array(m);
    for(let i = 0 ; i < m; i++){
        arr[i] = new Array(n);
        for(let j = 0; j < n; j++){
            arr[i][j] = null;
        }
    }

    const coordinates = (type, axis, x, y) => {
        
        if(axis == 'x'){
            for(let i = x ; i < type.length + x ; i++){
                // arr[y][i] = type.arr[i-x];
                arr[y][i] = {ship: type, position: i-x, value: type.arr[i-x]}
            }
        }
        if(axis == 'y'){
            for(let i = y; i < type.length + y ; i++){
                // arr[i][x] = type.arr[i-y];
                arr[i][x] = {ship: type, position: i-y, value: type.arr[i-y]}

            }
        }
    }


    const receiveAttack = (x, y) => {
        if(arr[y][x] == null){
            arr[y][x] = undefined;
            
        }else if (arr[y][x] == undefined){
            
        }else{
            let craft = arr[y][x];
            craft.value = 0;
            craft.ship.hit(craft.position);
        }
    }

    return {carrier, battleship, destroyer, submarine, patrolBoat, arr, length, coordinates, receiveAttack}
}

export default Gameboard;