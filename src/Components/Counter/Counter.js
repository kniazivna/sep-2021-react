import React, {useReducer} from 'react';

import css from "./Counter.module.css";
import reducer from "../../Counter.reducer/count.reducer";

const Counter = () => {

    const [state, dispatch] = useReducer(reducer, {counter1: 0, counter2: 0, counter3: 0});

    return (
        <>
            <div className={css.main}>
                <div className={css.counter}>
                    <button onClick={() => dispatch({type: 'increment'})}>Increment</button>
                    <div>{state.counter1}</div>
                    <button onClick={() => dispatch({type: 'decrement'})}>Decrement</button>
                </div>
                <button className={css.btn} onClick={() => dispatch({type: 'reset'})}>Reset</button>
            </div>

            <div className={css.main}>
                <div className={css.counter}>
                    <button onClick={() => dispatch({type: 'inc'})}>Increment</button>
                    <div>{state.counter2}</div>
                    <button onClick={() => dispatch({type: 'dec'})}>Decrement</button>
                </div>
                <button className={css.btn} onClick={() => dispatch({type: 'res', payload:5})}>Reset</button>
            </div>

            <div className={css.main}>
                <div className={css.counter}>
                    <button onClick={() => dispatch({type: 'increm'})}>Increment</button>
                    <div>{state.counter3}</div>
                    <button onClick={() => dispatch({type: 'decrem'})}>Decrement</button>
                </div>
                <button className={css.btn} onClick={() => dispatch({type: 'r', payload:10})}>Reset</button>
            </div>
        </>
    );
};

export default Counter;