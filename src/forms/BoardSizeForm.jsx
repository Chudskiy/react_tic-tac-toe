import React, {useState} from 'react';
import * as yup from 'yup';

const BoardSizeForm = ({boardSize, setBoardSize, handleChangeBoardSize, winner}) => {
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const schema = yup.object({
        boardSize: yup.number()
            .required('This field is required.')
            .positive('Number must be positive.')
            .integer('Number must be integer.')
            .min(3, 'Min value 3.')
            .max(7, 'Max value  7.')
            .nullable()
    });

    schema
        .validate({boardSize})
        .then(function(value) {
            // console.log(value);
        })
        .catch(function(err) {
            setError(true);
            setErrorMessage(err.message);
            // console.log('error message = ', err.message);
        });


    return (
        <>
            {error && <h3>{errorMessage}</h3>}

            <form onSubmit={handleChangeBoardSize}>
                <label>Board size</label>
                <input
                    type="number"
                    value={boardSize}
                    onChange={e => setBoardSize(e.target.value)}
                />

                {!winner && <button>Change</button>}
            </form>
        </>
    );
};

export default BoardSizeForm;