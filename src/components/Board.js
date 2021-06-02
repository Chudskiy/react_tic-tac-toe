import React, {useState} from 'react';
import Square from "./Square";
import {BOARD_SIZE} from "./constants";

const Board = () => {
    const [isXNext, setIsXNext] = useState('0');
    const squaresArray = Array(BOARD_SIZE).fill(null);

    return (
        <div className='board'>
            {squaresArray && squaresArray.map((s, i) => (
                <Square key={i} isXNext={isXNext} setIsXNext={setIsXNext}/>
            ))}
        </div>
    );
};

export default Board;
