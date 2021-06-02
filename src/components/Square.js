import React, {useState} from 'react';

const Square = ({nextValue, setNextValue}) => {
    const [value, setValue] = useState('');

    const step = nextValue ? 'X' : '0';

    const handleClick = () => {
        if (value) return;

        setValue(step);
        setNextValue(!nextValue);
    }

    return (
        <button onClick={handleClick} className='square'>
            {value}
        </button>
    );
};

export default Square;
