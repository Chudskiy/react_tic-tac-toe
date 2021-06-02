import React, {useState} from 'react';
import Square from "./Square";

const Board = () => {
    const [nextValue, setNextValue] = useState(true);
    const squaresArray = Array(9).fill(null);

    return (
        <div className='board'>
            {squaresArray && squaresArray.map((s, i) => (
                <Square key={i} nextValue={nextValue} setNextValue={setNextValue}/>
            ))}
        </div>
    );
};

export default Board;
