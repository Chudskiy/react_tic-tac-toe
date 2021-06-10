export const hasWinner = {
    HORIZONTALLY: (board, index, subIndex, value, boardSize) => {
        let counter = 0;

        for (let i = 0; i < board[index].length; i++) {

            if (board[index][i] === value) {
                counter++;

                if (counter === +boardSize) {
                    return true
                }
            } else {
                return false
            }
        }
    },

    VERTICALLY: (board, index, subIndex, value, boardSize) => {
        let counter = 0;
        for (let i = 0; i < board[index].length; i++) {
            if (board[i][subIndex] === value) {
                counter++;
                if (counter === +boardSize) {
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
                if (counterStart === +boardSize) {
                    return true
                }
                start++
            }
        }

        for (let i = 0; i < boardSize; i++) {
            if (board[i][end] === value) {
                counterEnd++;
                if (counterEnd === +boardSize) {
                    return true
                }
                end--
            }
        }
        return false
    },
};


