import Player from '../source/player';
import Gameboard from '../source/gameboard';

it('Creating Player1 and testing board', () => {
    
    let player1 = new Player (new Gameboard());
    player1.standartPlace();
    player1.getPlayer().receiveAttack(0, 0);
    player1.getPlayer().receiveAttack(0, 1);

    let counter = 0;
    for(let i = 0; i < 10 ; i++){
        for(let j = 0; j < 10; j++){
            if(player1.getPlayer().board()[j][i].safe == true){
                counter++;
            }
        }
    }
    
    expect(counter).toBe(98);
});


it.only('Creating Player2 and testing ai board', () => {
    let player2 = new Player(new Gameboard());
    player2.aiRandomise();

    let counter = 0;
    for(let i = 0; i < 10 ; i++){
        for(let j = 0; j < 10; j++){
            if(player2.getPlayer().board()[j][i].safe == true){
                counter++;
            }
            if(player2.getPlayer().board()[j][i].hasOwnProperty('position')){
                counter--;
            }
        }
    }
    expect(counter).toBe(83);
});

it('Testing player2 shoots on player1', () => {
    let player1 = new Player(new Gameboard());
    let player2 = new Player(new Gameboard());

    player1.standartPlace();
    player2.aiRandomise();

    player2.aiShot();
    player2.aiShot();
    player2.aiShot();
    player2.aiShot();
    player2.aiShot();
    player2.aiShot();
    player2.aiShot();
    player2.aiShot();
    player2.aiShot();
    player2.aiShot();
    player2.aiShot();
 
    expect(player2.getPlayer().board()).toEqual([]);

});

