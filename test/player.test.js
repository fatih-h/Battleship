// import { player1, player2, aiShot} from "../source/player";

// it('player1 testing', () => {
//     let counter = 0;
//     for(let i = 0; i < 10 ; i++){
//         for(let j = 0; j < 10; j++){
//             if(player1.board()[j][i].safe == true){
//                 counter++;
//             }
//         }
//     }
//     expect(counter).toBe(83);
// });

// it('player2 testing', () => {
//     let counter = 0;
//     for(let i = 0; i < 10 ; i++){
//         for(let j = 0; j < 10; j++){
//             if(player2.board()[j][i].safe == true){
//                 counter++;
//             }
//         }
//     }
//     expect(counter).toBe(83);
// });


// it('ai shot feature testing on player1', () => {
//     let shooter = new aiShot(player1);
//     shooter.shot();
//     shooter.shot();
//     shooter.shot();
//     shooter.shot();
//     expect(shooter.getRecords.length).toEqual(3);
// });