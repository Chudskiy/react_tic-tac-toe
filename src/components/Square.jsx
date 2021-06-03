import React from 'react';

const Square = ({handleClick, item, index}) => {
    return (
        <button onClick={() => handleClick(index)} className='square'>
            {item}
        </button>
    );
};

export default Square;
