import Gameboard from './gameboard';

function Player(){
    let gameboard = new Gameboard(10, 10);

    return {gameboard}
}

export default Player;