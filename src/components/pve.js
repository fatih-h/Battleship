import Player from '../sources/player';
import Gameboard from '../sources/gameboard';
import '../styles/pve.css';

function pve() {

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

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            let point = document.createElement('div');
            point.classList.add('pve-point');
            point.setAttribute('data-x', `${j}`);
            point.setAttribute('data-y', `${i}`);
            firstP.appendChild(point);
        }
    }

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
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

    Array.from(aiP.children).forEach( e => {
        e.addEventListener('click', (event) => {
            secondBoard(event);
            firstBoard();
            
        }, {once: true});
    });

    function firstBoard() {
        player1.aiShot();
        let index = (player1.getRecords()[0].y * 10) + player1.getRecords()[0].x;        
        let stil = firstP.children[index];
        if(player1.getRecords()[0].hasOwnProperty('position')){
            stil.style = "background: url('../dist/icons/explosion.png') no-repeat center center;";
        }
        else{
            stil.style = "background: url('../dist/icons/boom.png') no-repeat center center;";
        }

    }

    function secondBoard(event) {
        let x = event.target.getAttribute('data-x');
        let y = event.target.getAttribute('data-y');
        ai.getPlayer().receiveAttack(x, y);
        if(ai.getPlayer().board()[y][x].hasOwnProperty('position')){
            event.target.style = "background: url('../dist/icons/explosion.png') no-repeat center center;";
        }
        else{
            event.target.style = "background: url('../dist/icons/boom.png') no-repeat center center;";
            
        }
    }

    main.appendChild(board);
    main.appendChild(containerP);
    return main;
}

export default pve;