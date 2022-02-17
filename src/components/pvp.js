import Player from '../sources/player';
import Gameboard from '../sources/gameboard';
import '../styles/pvp.css';

function pvp(){

    let player1 = new Player(new Gameboard());
    let player2 = new Player(new Gameboard());

    player1.standartPlace();
    player2.secondPlace();


    let main = document.createElement('div');
    main.classList.add('pvp-main');

    let board = document.createElement('div');
    let text = document.createElement('h3');
    let containerP = document.createElement('div');
    let firstP = document.createElement('div');
    let secondP = document.createElement('div');

    for(let i = 0; i < 10; i++){
        for(let j = 0; j < 10; j++){
            let point = document.createElement('div');
            point.classList.add('pvp-point');
            point.setAttribute('data-x', `${j}`);
            point.setAttribute('data-y', `${i}`); 
            firstP.appendChild(point);
        }
    }

    for(let i = 0; i < 10; i++){
        for(let j = 0; j < 10; j++){
            let point = document.createElement('div');
            point.classList.add('pvp-point');
            point.setAttribute('data-x', `${j}`);
            point.setAttribute('data-y', `${i}`); 
            secondP.appendChild(point);
        }
    }

    text.textContent = "The Battleship Begins!";

    board.classList.add('pvp-board');
    text.classList.add('pvp-scoreText');
    containerP.classList.add('pvp-container');
    firstP.classList.add('pvp-firstP');
    secondP.classList.add('pvp-secondP');
    
    board.appendChild(text);
    containerP.appendChild(firstP);
    containerP.appendChild(secondP);
    
    let counter = 0;
    Array.from(containerP.children).forEach(e => {
        e.addEventListener('click', (event) => {
            if(e.classList[0] == 'pvp-firstP' && counter % 2 != 0){
                firstBoard(event);
                counter++;
            }
            else if(e.classList[0] == 'pvp-secondP' && counter % 2 == 0){
               secondBoard(event);
               counter++;
            }
        });
    });

    function firstBoard(event){
        let x = event.target.getAttribute('data-x');
        let y = event.target.getAttribute('data-y');
        player1.getPlayer().receiveAttack(x, y);
        console.log(player1.getPlayer().board());
    }

    function secondBoard(event){
        let x = event.target.getAttribute('data-x');
        let y = event.target.getAttribute('data-y');
        player2.getPlayer().receiveAttack(x, y);
        console.log(player2.getPlayer().board());        
    }
    

    
    main.appendChild(board);
    main.appendChild(containerP);
    return main;
}

export default pvp;