import Player from '../sources/player';
import Gameboard from '../sources/gameboard';
import '../styles/pve.css';

function pve(){

    let player1 = new Player(new Gameboard());
    let ai = new Player(new Gameboard());

    player1.standartPlace();
    ai.aiRandomise();


    let main = document.createElement('div');
    main.classList.add('pve-main');

    let board = document.createElement('div');
    let text = document.createElement('h3');
    let containerP = document.createElement('div');
    let firstP = document.createElement('div');
    let aiP = document.createElement('div');

    for(let i = 0; i < 10; i++){
        for(let j = 0; j < 10; j++){
            let point = document.createElement('div');
            point.classList.add('pve-point');
            point.setAttribute('data-x', `${j}`);
            point.setAttribute('data-y', `${i}`); 
            firstP.appendChild(point);
        }
    }

    for(let i = 0; i < 10; i++){
        for(let j = 0; j < 10; j++){
            let point = document.createElement('div');
            point.classList.add('pve-point');
            point.setAttribute('data-x', `${j}`);
            point.setAttribute('data-y', `${i}`); 
            aiP.appendChild(point);
        }
    }

    text.textContent = "The Battleship Begins!";

    board.classList.add('pve-board');
    text.classList.add('pve-scoreText');
    containerP.classList.add('pve-container');
    firstP.classList.add('pve-firstP');
    aiP.classList.add('pve-aiP');
    
    board.appendChild(text);
    containerP.appendChild(firstP);
    containerP.appendChild(aiP);
    
    let counter = 0;
    Array.from(containerP.children).forEach(e => {
        e.addEventListener('click', (event) => {
            if(e.classList[0] == 'pve-firstP' && counter % 2 != 0){
                firstBoard(event);
                counter++;
            }
            else if(e.classList[0] == 'pve-aiP' && counter % 2 == 0){
               secondBoard(event);
               counter++;
            }
        });
    });

    function firstBoard(event){
        let x = event.target.getAttribute('data-x');
        let y = event.target.getAttribute('data-y');
        player1.aiShot();
        console.log(player1.getPlayer().board());
    }

    function secondBoard(event){
        let x = event.target.getAttribute('data-x');
        let y = event.target.getAttribute('data-y');
        ai.getPlayer().receiveAttack(x, y);
        console.log(ai.getPlayer().board());        
    }
    

    
    main.appendChild(board);
    main.appendChild(containerP);
    return main;
}

export default pve;