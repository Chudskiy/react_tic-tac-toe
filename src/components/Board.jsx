import React, {useState} from 'react';
import Square from "./Square";
import {BOARD_SIZE} from "./constants";

const Board = () => {
    const [isXNext, setIsXNext] = useState('0');
    const [squares, setSquares] = useState(Array(BOARD_SIZE).fill(null));


    const handleClick = (index) => {
        const newSquares = [...squares];

        if (newSquares[index] === 'X' || newSquares[index] === '0') return;

        newSquares[index] = isXNext ? 'X' : '0';
        setSquares(newSquares);

        setIsXNext(!isXNext);
    }

    return (
        <div className='board'>
            {squares.map((item, index) => (
                <Square
                    key={index}
                    index={index}
                    item={item}
                    handleClick={handleClick}
                />
            ))}
        </div>
    );
};

export default Board;
