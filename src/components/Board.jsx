import React, {useState} from 'react';

import Square from "./Square";
import {BOARD_SIZE, DIAGONALLY, HORIZONTALLY, VERTICALLY} from "./constants";


// const board = (() => {
//     return Array(BOARD_SIZE).fill(Array(BOARD_SIZE).fill(null))
// })()

const board = Array(BOARD_SIZE).fill(Array(BOARD_SIZE).fill(null));
const boardWidth = `${BOARD_SIZE * 50}px`;

const hasWinner = {
    HORIZONTALLY: (board, index, subIndex, value) => {
        let counter = 0;

        for (let i = 0; i < board[index].length; i++) {

            // console.log('board[index][i] = ', board[index])

            if (board[index][i] === value) {
                counter++
                if (counter === BOARD_SIZE) {
                    return true
                }
            } else {
                return false
            }
        }
    },

    VERTICALLY: (board, index, subIndex, value) => {
        let counter = 0;

        for (let i = 0; i < board[index].length; i++) {
            if (board[i][subIndex] === value) {
                counter++
                if (counter === BOARD_SIZE) {
                    return true
                }
            } else {
                return false
            }
        }
    },

    DIAGONALLY: (board, index, subIndex, value) => {
        let counterStart = 0;
        let counterEnd = 0;

        let start = 0
        let end = BOARD_SIZE - 1

        for (let i = 0; i < board[index].length; i++) {
            if (board[i][start] === value) {
                counterStart++
                if (counterStart === BOARD_SIZE) {
                    return true
                }
                start++
            }
        }

        for (let i = 0; i < BOARD_SIZE; i++) {
            if (board[i][end] === value) {
                counterEnd++
                if (counterEnd === BOARD_SIZE) {
                    return true
                }
                end--
            }
        }
        return false
    },
}

const findWinner = (board, index, subIndex, value) => {
    return [HORIZONTALLY, VERTICALLY, DIAGONALLY].some(key => hasWinner[key](board, index, subIndex, value))
}

const Board = () => {
    const [isXNext, setIsXNext] = useState('0');
    const [squares, setSquares] = useState(board);
    const [winner, setWinner] = useState(null);
    const [disabled, setDisabled] = useState(false);

    const handleClick = (index, subIndex) => {

        console.log('index = ', index);
        console.log('subIndex = ', subIndex);

        const nextRows = [...squares];
        const nextSquares = [...nextRows[index]];

        if (nextRows[index][subIndex]) return;

        nextSquares[subIndex] = isXNext ? 'X' : '0';
        nextRows[index] = [...nextSquares]

        const result = findWinner(nextRows, index, subIndex, isXNext ? 'X' : '0')

        setSquares([...nextRows]);
        setIsXNext(!isXNext);
        setWinner(result ? isXNext ? 'X' : '0' : null)
        setDisabled(result)
    };

    return (
        <>
            <div className='board' style={{width: boardWidth}}>
                {squares.map((row, index) => {
                    // console.log(row)
                    return row.map((square, subIndex) => (
                        <Square
                            key={subIndex}
                            index={index}
                            subIndex={subIndex}
                            item={square}
                            handleClick={handleClick}
                            disabled={disabled}
                        />
                    ))
                })}
            </div>

            {winner ? (<div>Winner: {winner}</div>) : null}
        </>
    );
};

export default Board;


