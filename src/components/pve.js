import Player from '../sources/player';
import Gameboard from '../sources/gameboard';
import '../styles/pve.css';

function pve(){
    let main = document.createElement('div');
    main.classList.add('pve-main');

    let board = document.createElement('div');
    let text = document.createElement('h3');
    
    let containerP = document.createElement('div');
    let firstP = document.createElement('div');
    let secondP = document.createElement('div');

    for(let i = 0; i < 100; i++){
        let point = document.createElement('div');
        point.classList.add('pve-point');
        firstP.appendChild(point);
    }

    for(let i = 0; i < 100; i++){
        let point = document.createElement('div');
        point.classList.add('pve-point');
        secondP.appendChild(point);
    }

    text.textContent = "Player1's Turn";

    board.classList.add('pve-board');
    text.classList.add('pve-scoreText');
    containerP.classList.add('pve-container');
    firstP.classList.add('pve-firstP');
    secondP.classList.add('pve-secondP');


    board.appendChild(text);
    containerP.appendChild(firstP);
    containerP.appendChild(secondP);
    main.appendChild(board);
    main.appendChild(containerP);

    return main;
}

export default pve;