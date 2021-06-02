import React, {useState} from 'react';

const Square = ({isXNext, setIsXNext}) => {
    const [value, setValue] = useState('');

    const step = isXNext ? 'X' : '0';

    const handleClick = () => {
        if (value) return;

        setValue(step);
        setIsXNext(!isXNext);
    }

    return (
        <button onClick={handleClick} className='square'>
            {value}
        </button>
    );
};

export default Square;
