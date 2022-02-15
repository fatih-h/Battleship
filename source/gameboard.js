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
            if(this.ship.carrier.isSunk() && 
            this.ship.battleship.isSunk() && 
            this.ship.destroyer.isSunk() && 
            this.ship.submarine.isSunk() && this.ship.
            patrolboat.isSunk()){
                return 'All ships have been sunk';
            }
        }
    }
    

    this.axis = (value) => {
        if(value == 'y'){
           axis = 'y';
        }else if(value == 'x'){
            axis = 'x';
        }
    }

    this.put = (veh, x, y) => {

        if(axis == 'x'){
            clear = true;
            for(let i = 0 ; i < veh.length ;i++){
                if(arr[y][x + i].safe == false){
                    clear = false;
                }
            } 
            if(x + veh.length <= 10 && y < 10){
                if(clear){
                    for(let i = 0 ; i < veh.length ;i++){
                        arr[y][x + i].veh = veh;
                        arr[y][x + i].position = i;
                        
                    }
                }
            }else{
                clear=false;
            }
        }
        if(axis == 'y'){
            clear = true;
            for(let i = 0 ; i < veh.length ;i++){
                if(arr[y + i][x].safe == false){
                    clear = false;
                }
            }
            if(x < 10 && y + veh.length <= 10){
                if(clear){
                    for(let i = 0; i < veh.length ;i++){
                        arr[y + i][x].veh = veh;
                        arr[y + i][x].position = i;
                    }
                }
            }else{
                clear = false;
            }
        }
    }
    
    this.receiveAttack = (x, y) => {
        arr[y][x].safe = false;
        if(arr[y][x].hasOwnProperty('position')){
            let index = arr[y][x].position;
            let tool = arr[y][x].veh;
            tool.hit(index);
        }
        
    }
    this.board = () => {
        return arr;
    }
    this.clearFalse = () =>{
        clear = false;
    }
    this.clearArea = () => {
        return clear;
    }
}

export default Gameboard;