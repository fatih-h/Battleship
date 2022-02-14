import Gameboard from './gameboard';

function Player(){
    let gameboard = new Gameboard(10, 10);
    
    const ai = () => {
        
    }

    return {gameboard, ai}
}

export default Player;