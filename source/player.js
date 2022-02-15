
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
                pl.put(pl.ship.carrier, random(10), random(10 - pl.ship.carrier.length));
            }else{
                pl.axis('x');
                pl.put(pl.ship.carrier, random(10 - pl.ship.carrier.length), random(10));
            }
               
        }

        pl.clearFalse();
        while(!pl.clearArea()){
            if(dice()){
                pl.axis('y');
                pl.put(pl.ship.battleship, random(10), random(10 - pl.ship.battleship.length));
            }else{
                pl.axis('x');
                pl.put(pl.ship.battleship, random(10 - pl.ship.battleship.length), random(10));
            }
            
        }

        pl.clearFalse();
        while(!pl.clearArea()){
            if(dice()){
                pl.axis('y');
                pl.put(pl.ship.destroyer, random(10), random(10 - pl.ship.destroyer.length));
            }else{
                pl.axis('x');
                pl.put(pl.ship.destroyer, random(10 - pl.ship.destroyer.length), random(10));
            }
        }

        pl.clearFalse();
        while(!pl.clearArea()){
            if(dice()){
                pl.axis('y');
                pl.put(pl.ship.submarine, random(10), random(10 - pl.ship.submarine.length));
            }else{
                pl.axis('x');
                pl.put(pl.ship.submarine, random(10 - pl.ship.submarine.length), random(10));
            }
        }

        pl.clearFalse();
        while(!pl.clearArea()){
            if(dice()){
                pl.axis('y');
                pl.put(pl.ship.patrolboat, random(10), random(10 - pl.ship.patrolboat.length));
            }else{
                pl.axis('x');
                pl.put(pl.ship.patrolboat, random(10 - pl.ship.patrolboat.length), random(10));
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