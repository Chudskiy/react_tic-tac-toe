import React, {useState} from 'react';

import Square from "./Square";
import {DIAGONALLY, HORIZONTALLY, VERTICALLY} from "../constants";
import {hasWinner} from "../functions/hasWinner";
import BoardSizeForm from "../forms/BoardSizeForm";

// const board = Array(BOARD_SIZE).fill(Array(BOARD_SIZE).fill(null));

const findWinner = (board, index, subIndex, value) => {
    return [HORIZONTALLY, VERTICALLY, DIAGONALLY].some(key => hasWinner[key](board, index, subIndex, value))
};


//----------------------------------------------------------------------------------------------------------------------

const Board = () => {
    const [boardSize, setBoardSize] = useState(3);

    const [isXNext, setIsXNext] = useState('0');
    // const [squares, setSquares] = useState(board);
    const [squares, setSquares] = useState(Array(boardSize).fill(Array(boardSize).fill(null)));
    const [winner, setWinner] = useState(null);
    const [disabled, setDisabled] = useState(false);

    const boardWidth = `${boardSize * 50}px`;
    console.log('squares = ', squares);


    const handleChangeBoardSize = (e) => {
        e.preventDefault();

        setBoardSize(boardSize);
        //
        // setSquares(Array(boardSize).fill(Array(boardSize).fill(null)));
    };

    console.log('boardSize = ', boardSize);


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
            <BoardSizeForm
                boardSize={boardSize}
                setBoardSize={setBoardSize}
                handleChangeBoardSize={handleChangeBoardSize}
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

            <button onClick={() => document.location.reload()}>Restart</button>

            {winner ? (<div>Winner: {winner}</div>) : null}
        </>
    );
};

export default Board;





// const board = (() => {
//     return Array(BOARD_SIZE).fill(Array(BOARD_SIZE).fill(null))
// })()



// const [boardSize, setBoardSize] = useState(null);
// const [boardWidth, setBoardWidth] = useState('');
// const [boardHeight, setBoardHeight] = useState('');


// {/*<BoardSizeForm*/}
// {/*    boardSize={boardSize}*/}
// {/*    setBoardSize={setBoardSize}*/}
// {/*    handleChangeBoardSize={handleChangeBoardSize}*/}
// {/*/>*/}


// const handleChangeBoardSize = (e) => {
//     e.preventDefault();
//
//     setBoardSize(boardSize);
//
//     setBoardWidth(`${boardSize * 50}px`);
//
//     console.log('boardSize = ', boardSize);
// };



