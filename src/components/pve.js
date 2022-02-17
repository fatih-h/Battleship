import Player from '../sources/player';
import Gameboard from '../sources/gameboard';
import '../styles/pve.css';

function pve(){

    let player1 = new Player(new Gameboard());
    let player2 = new Player(new Gameboard());

    player1.standartPlace();
    player2.secondPlace();


    let main = document.createElement('div');
    main.classList.add('pve-main');

    let board = document.createElement('div');
    let text = document.createElement('h3');
    let containerP = document.createElement('div');
    let firstP = document.createElement('div');
    let secondP = document.createElement('div');

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
            secondP.appendChild(point);
        }
    }

    text.textContent = "The Battleship Begins!";

    board.classList.add('pve-board');
    text.classList.add('pve-scoreText');
    containerP.classList.add('pve-container');
    firstP.classList.add('pve-firstP');
    secondP.classList.add('pve-secondP');

    Array.from(firstP.children).forEach(e => {
        e.addEventListener('click', (event) => {
            let x = event.target.getAttribute('data-x');
            let y = event.target.getAttribute('data-y');
            player1.getPlayer().receiveAttack(x, y);
        },{once: true});
    });

    Array.from(secondP.children).forEach(e => {
        e.addEventListener('click', (event) => {
            let x = event.target.getAttribute('data-x');
            let y = event.target.getAttribute('data-y');
            player2.getPlayer().receiveAttack(x, y);
        }, {once: true});
    });
    
    

    board.appendChild(text);
    containerP.appendChild(firstP);
    containerP.appendChild(secondP);
    main.appendChild(board);
    main.appendChild(containerP);

    return main;
}

export default pve;