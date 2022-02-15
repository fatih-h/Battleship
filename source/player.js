
function Player(pl){

    this.standartPlace = () => {
        pl.axis();
        pl.put(pl.ship.carrier, 1, 3);
        pl.axis();
        pl.put(pl.ship.battleship, 6, 1);
        pl.put(pl.ship.destroyer, 2, 8);
        pl.axis();
        pl.put(pl.ship.submarine, 6, 4);
        pl.axis();
        pl.put(pl.ship.patrolboat, 8, 7);
    }

    this.aiRandomise = () => {

        let random = (length) => { 
            return Math.floor(Math.random() * (length + 1));
        }
        let dice = () => {
            return Math.floor(Math.random * 2);
        }
        let the = pl.ship;

        while(!pl.clearArea()){
            if(dice){
                pl.axis();
            }
            pl.put(the.carrier, random(the.carrier.length), random(the.carrier.length));   
        }
        pl.clearFalse();
        while(!pl.clearArea()){
            if(dice){
                pl.axis();
            }
            pl.put(the.battleship, random(the.battleship.length), random(the.battleship.length));
        }
        pl.clearFalse();
        while(!pl.clearArea()){
            if(dice){
                pl.axis();
            }
            pl.put(the.destroyer, random(the.destroyer.length), random(the.destroyer.length));
        }
        pl.clearFalse();
        while(!pl.clearArea()){
            if(dice){
                pl.axis();
            }
            pl.put(the.submarine, random(the.submarine.length), random(the.submarine.length));
        }
        pl.clearFalse();
        while(!pl.clearArea()){
            if(dice){
                pl.axis();
            }
            pl.put(the.patrolboat, random(the.patrolboat.length), random(the.patrolboat.length));
        }

    }

    this.aiShot = () => {
        let shotRecords = [];
        let random = () => {
            return Math.floor(Math.random() * 11);
        }

        let shot = () => {
            let control = false;
           while(!control){
                let x = random();
                let y = random();

               let isRandom = true;
                for(let i = 0; i < shotRecords.length; i++){
                    if(shotRecords[i] == pl.board()[y][x]){
                        isRandom = false;
                    }
            
                }
                shotRecords.push(pl.board()[y][x])
                if(isRandom){
                    pl.receiveAttack(x, y);
                }
                control = true;
            }
        }
        let getRecords = () => {
            return shotRecords;
        }
        {shotRecords, shot, getRecords}
    }
}
export default Player;