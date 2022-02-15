
function Player(pl){
    
    this.shotRecords = [];

    this.standartPlace = () => {
        pl.axis('y');
        pl.put(pl.ship.carrier, 1, 3);
        pl.axis('x');
        pl.put(pl.ship.battleship, 6, 1);
        pl.put(pl.ship.destroyer, 2, 8);
        pl.axis('y');
        pl.put(pl.ship.submarine, 6, 4);
        pl.axis('x');
        pl.put(pl.ship.patrolboat, 8, 7);
    }

    this.aiRandomise = () => {

        let random = (length) => { 
            return Math.floor(Math.random() * (length));
        }
        let dice = () => {
            return Math.floor(Math.random * 1);
        }
        

        while(!pl.clearArea()){
            if(dice()){
                pl.axis('y');
                pl.put(pl.ship.carrier, random(pl.ship.carrier.length), 10-random(pl.ship.carrier.length));
            }else{
                pl.axis('x');
                pl.put(pl.ship.carrier, 10-random(pl.ship.carrier.length), random(pl.ship.carrier.length));
            }
               
        }

        pl.clearFalse();
        while(!pl.clearArea()){
            if(dice()){
                pl.axis('y');
                pl.put(pl.ship.battleship, random(pl.ship.battleship.length), 10-random(pl.ship.battleship.length));
            }else{
                pl.axis('x');
                pl.put(pl.ship.battleship, 10-random(pl.ship.battleship.length), random(pl.ship.battleship.length));
            }
            
        }

        pl.clearFalse();
        while(!pl.clearArea()){
            if(dice()){
                pl.axis('y');
                pl.put(pl.ship.destroyer, random(pl.ship.destroyer.length), 10-random(pl.ship.destroyer.length));
            }else{
                pl.axis('x');
                pl.put(pl.ship.destroyer, 10-random(pl.ship.destroyer.length), random(pl.ship.destroyer.length));
            }
        }

        pl.clearFalse();
        while(!pl.clearArea()){
            if(dice()){
                pl.axis('y');
                pl.put(pl.ship.submarine, random(pl.ship.submarine.length), 10-random(pl.ship.submarine.length));
            }else{
                pl.axis('x');
                pl.put(pl.ship.submarine, 10-random(pl.ship.submarine.length), random(pl.ship.submarine.length));
            }
        }

        pl.clearFalse();
        while(!pl.clearArea()){
            if(dice()){
                pl.axis('y');
                pl.put(pl.ship.patrolboat, random(pl.ship.patrolboat.length), 10-random(pl.ship.patrolboat.length));
            }else{
                pl.axis('x');
                pl.put(pl.ship.patrolboat, 10-random(pl.ship.patrolboat.length), random(pl.ship.patrolboat.length));
            }
        }

    }
    
    this.aiShot = () => {

        let random = () => {
            return Math.floor(Math.random() * 10);
        }

        let control = false;
        while(!control){
            let x = random();
            let y = random();

            let isRandom = true;
            for(let i = 0; i < this.shotRecords.length; i++){
                if(this.shotRecords[i] == pl.board()[y][x]){
                    isRandom = false;
               }
            }
            if(isRandom){
                this.shotRecords.push(pl.board()[y][x])
                pl.receiveAttack(x, y);
                control = true;
            } 
        }
       
    }
    this.getRecords = () => {
        return this.shotRecords;
    }
    this.getPlayer = () => {
        return pl;
    }
}
export default Player;