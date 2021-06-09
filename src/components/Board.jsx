import React, {useState} from 'react';

import Square from "./Square";
import BoardSizeForm from "../forms/BoardSizeForm";
import {hasWinner} from "../functions/hasWinner";
import {DIAGONALLY, HORIZONTALLY, VERTICALLY} from "../constants";


const Board = () => {
    const [boardSize, setBoardSize] = useState(0);
    const [isXNext, setIsXNext] = useState('0');
    const [squares, setSquares] = useState(Array(boardSize).fill(Array(boardSize).fill(null)));
    const [winner, setWinner] = useState(null);
    const [disabled, setDisabled] = useState(false);
    const [boardWidth, setBoardWidth] = useState(`${boardSize * 50}px`);

    const findWinner = (squares, index, subIndex, value) => {
        return [HORIZONTALLY, VERTICALLY, DIAGONALLY].some(key => hasWinner[key](squares, index, subIndex, value, boardSize));
    };


    const handleChangeBoardSize = (e) => {
        e.preventDefault();

        setBoardWidth(`${boardSize * 50}px`);
        setSquares(Array(+boardSize).fill(Array(+boardSize).fill(null)));
    };



    const handleClick = (index, subIndex) => {
        const nextRows = [...squares];

        const nextSquares = [...nextRows[index]];

        if (nextRows[index][subIndex]) return;

        nextSquares[subIndex] = isXNext ? 'X' : '0';
        nextRows[index] = [...nextSquares];

        const result = findWinner(nextRows, index, subIndex, isXNext ? 'X' : '0');

        setSquares([...nextRows]);
        setIsXNext(!isXNext);
        setWinner(result ? isXNext ? 'X' : '0' : null);
        setDisabled(result)
    };


    return (
        <>
            <button
                style={{marginBottom: '20px', width: '600px'}}
                onClick={() => document.location.reload()}>
                Restart
            </button>

            <BoardSizeForm
                boardSize={boardSize}
                setBoardSize={setBoardSize}
                handleChangeBoardSize={handleChangeBoardSize}
                winner={winner}
            />

            < div className='board' style={{width: boardWidth}}>
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


// const board = (() => {
//     return Array(BOARD_SIZE).fill(Array(BOARD_SIZE).fill(null))
// })()


// const findWinner = (squares, index, subIndex, value) => {
//     return [HORIZONTALLY, VERTICALLY, DIAGONALLY].some(key => hasWinner[key](squares, index, subIndex, value, boardSize));
// };





