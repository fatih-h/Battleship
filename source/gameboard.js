import Ship from './ship';

function Gameboard(){
    /*Object Creation Tasks */
    let arr = new Array(10);
    for(let i = 0; i < (10); i++){
        arr[i] = new Array(10);
        for(let j = 0; j < 10; j++){
            arr[i][j] = {x: j, y: i, safe: true}
        }
    }

    /*Object Property */
    this.length = 100;
    let axis = 'x';
    let clear = false;
    /*Object Methods */
    this.ship = {
        carrier : new Ship(5),
        battleship : new Ship(4),
        destroyer : new Ship(3),
        submarine : new Ship(3),
        patrolboat : new Ship(2),
        allSunk: () => {
            if(carrier.isSunk() && battleship.isSunk() && destroyer.isSunk() && submarine.isSunk() && patrolboat.isSunk()){
                return 'All ships have been sunk';
            }
        }
    }
    

    this.axis = () => {
        if(axis == 'x'){
           axis = 'y';
        }else{
            axis = 'x';
        }
    }

    this.put = (veh, x, y) => {

        if(axis == 'x'){
            clear = true;
            for(let i = 0 ; i < veh.length ;i++){
                if(arr[y][x + i].safe != true){
                    clear = false;
                }
            } 
            if(x + veh.length <= 10 && y <= 10){
                if(clear){
                    for(let i = 0 ; i < veh.length ;i++){
                        arr[y][x + i].safe = veh;
                        arr[y][x + i].position = i;
                    }
                }
            }else{
                clear=false;
            }
        }
        else{
            clear = true;
            for(let i = 0 ; i < veh.length ;i++){
                if(arr[y + i][x].safe != true){
                    clear = false;
                }
            }
            if(x <= 10 && y + veh.length <= 10){
                if(clear){
                    for(let i = 0; i < veh.length ;i++){
                        arr[y + i][x].safe = veh;
                        arr[y + i][x].position = i;
                    }
                }
            }else{
                clear = false;
            }
        }
    }
    
    this.receiveAttack = (x, y) => {
        if(arr[y][x].safe == true){
            arr[y][x].safe == false;
        }
        else if(arr[y][x].safe != false){
            let index = arr[y][x].position;
            let ship = arr[y][x].safe;
            ship.hit(index);
        }
        
    }
    this.board = () => {
        return arr;
    }
    this.clearFalse = () =>{
        clear=false;
    }
    this.clearArea = () => {
        return clear;
    }
}

export default Gameboard;