import React from 'react';

const Square = ({handleClick, item, index, disabled}) => {
    return (
        <button disabled={disabled} onClick={() => handleClick(index)} className='square'>
            {item}
        </button>
    );
};

export default Square;
