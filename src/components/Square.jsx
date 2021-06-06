import React from 'react';

const Square = ({handleClick, item, index, subIndex, disabled}) => {
    return (
        <button disabled={disabled} onClick={() => handleClick(index, subIndex)} className='square'>
            {item}
        </button>
    );
};

export default Square;
