import React, {useState} from 'react';
import Square from "./Square";
import {BOARD_SIZE} from "./constants";


const Board = () => {
    const [isXNext, setIsXNext] = useState('0');
    const [squares, setSquares] = useState(Array(BOARD_SIZE).fill(null));
    const [disabled, setDisabled] = useState(false);

    const handleClick = (index) => {
        const newSquares = [...squares];

        // if(newSquares[index]) return;

        if (newSquares[index] === 'X' || newSquares[index] === '0') return;

        newSquares[index] = isXNext ? 'X' : '0';

        setSquares(newSquares);
        setIsXNext(!isXNext);


        if ((newSquares[0] !== null && newSquares[0] === newSquares[1] && newSquares[0] === newSquares[2]) ||
            (newSquares[3] !== null && newSquares[3] === newSquares[4] && newSquares[3] === newSquares[5]) ||
            (newSquares[6] !== null && newSquares[6] === newSquares[7] && newSquares[6] === newSquares[8]) ||
            (newSquares[0] !== null && newSquares[0] === newSquares[3] && newSquares[0] === newSquares[6]) ||
            (newSquares[1] !== null && newSquares[1] === newSquares[4] && newSquares[1] === newSquares[7]) ||
            (newSquares[2] !== null && newSquares[2] === newSquares[5] && newSquares[2] === newSquares[8]) ||
            (newSquares[0] !== null && newSquares[0] === newSquares[4] && newSquares[0] === newSquares[8]) ||
            (newSquares[2] !== null && newSquares[2] === newSquares[4] && newSquares[2] === newSquares[6]))
        {
            console.log();
            setDisabled(true);
        }
    };

    const handleRestart = () => {
        window.location.reload();
    };


    return (
        <div className='board'>
            {squares.map((item, index) => (
                <Square
                    key={index}
                    index={index}
                    item={item}
                    handleClick={handleClick}
                    disabled={disabled}
                />
            ))}

            <button className='restart-button' onClick={handleRestart}>Restart</button>
        </div>
    );
};

export default Board;
