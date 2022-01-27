import React from 'react';

import css from "../Counters/Counters.module.css";

const Counter1 = ({state,dispatch}) => {
    return (
        <>
            <div className={css.main}>
                <div className={css.counter}>
                    <button onClick={() => dispatch({type: 'increment'})}>Increment</button>
                    <div>{state}</div>
                    <button onClick={() => dispatch({type: 'decrement'})}>Decrement</button>
                </div>
                <button className={css.btn} onClick={() => dispatch({type: 'reset'})}>Reset</button>
            </div>
        </>
    );
};

export default Counter1;