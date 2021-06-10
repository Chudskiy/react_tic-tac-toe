import React from 'react';
import {BOARD_SIZE} from "../constants";

const BoardSizeForm = ({boardSize, setBoardSize, handleChangeBoardSize, winner}) => {
    return (
        <>
            <form onSubmit={handleChangeBoardSize}>
                <label>Board size</label>
                <input
                    type="number"
                    min={BOARD_SIZE}
                    max={10}
                    value={boardSize}
                    onChange={e => setBoardSize(e.target.value)}
                />

                {!winner && <button>Change board size</button>}
            </form>
        </>
    );
};

export default BoardSizeForm;
