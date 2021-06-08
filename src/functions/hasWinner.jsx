export const hasWinner = {
    HORIZONTALLY: (board, index, subIndex, value, boardSize) => {
        let counter = 0;

        console.log('counter in horizontally = ', counter);
        console.log('# boardSize in horizontally = ', boardSize);

        for (let i = 0; i < board[index].length; i++) {

            // console.log('board[index][i] = ', board[index])

            if (board[index][i] === value) {
                counter++;
                if (counter === boardSize) {
                    return true
                }
            } else {
                return false
            }
        }
    },

    VERTICALLY: (board, index, subIndex, value, boardSize) => {
        let counter = 0;

        console.log('counter in vertically = ', counter);
        console.log('# boardSize in vertically = ', boardSize);
        console.log('--------------------------------------------------------------------------------------');

        for (let i = 0; i < board[index].length; i++) {
            if (board[i][subIndex] === value) {
                counter++;
                if (counter === boardSize) {
                    return true
                }
            } else {
                return false
            }
        }
    },

    DIAGONALLY: (board, index, subIndex, value, boardSize) => {
        let counterStart = 0;
        let counterEnd = 0;

        let start = 0;
        let end = boardSize - 1;

        for (let i = 0; i < board[index].length; i++) {
            if (board[i][start] === value) {
                counterStart++;
                if (counterStart === boardSize) {
                    return true
                }
                start++
            }
        }

        for (let i = 0; i < boardSize; i++) {
            if (board[i][end] === value) {
                counterEnd++;
                if (counterEnd === boardSize) {
                    return true
                }
                end--
            }
        }
        return false
    },
};


//----------------------------------------------------------------------------------------------------------------------


// import {BOARD_SIZE} from "../constants";
//
// export const hasWinner = {
//     HORIZONTALLY: (board, index, subIndex, value) => {
//         let counter = 0;
//
//         console.log('BOARD_SIZE in horizontally = ', BOARD_SIZE);
//
//         for (let i = 0; i < board[index].length; i++) {
//
//             if (board[index][i] === value) {
//                 counter++;
//                 console.log('counter in horizontally = ', counter);
//
//                 if (counter === BOARD_SIZE) {
//                     return true
//                 }
//             } else {
//                 return false
//             }
//         }
//     },
//
//
//     VERTICALLY: (board, index, subIndex, value) => {
//         let counter = 0;
//
//         for (let i = 0; i < board[index].length; i++) {
//             if (board[i][subIndex] === value) {
//                 counter++;
//                 console.log('counter in vertically = ', counter);
//
//                 console.log('BOARD_SIZE in vertically = ', BOARD_SIZE);
//
//                 if (counter === BOARD_SIZE) {
//                     return true
//                 }
//             } else {
//                 return false
//             }
//         }
//     },
//
//     DIAGONALLY: (board, index, subIndex, value) => {
//         let counterStart = 0;
//         let counterEnd = 0;
//
//         let start = 0;
//         let end = BOARD_SIZE - 1;
//
//         for (let i = 0; i < board[index].length; i++) {
//             if (board[i][start] === value) {
//                 counterStart++;
//                 if (counterStart === BOARD_SIZE) {
//                     return true
//                 }
//                 start++
//             }
//         }
//
//         for (let i = 0; i < BOARD_SIZE; i++) {
//             if (board[i][end] === value) {
//                 counterEnd++;
//                 if (counterEnd === BOARD_SIZE) {
//                     return true
//                 }
//                 end--
//             }
//         }
//         return false
//     },
// };
