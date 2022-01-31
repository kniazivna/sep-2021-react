import React from 'react';
import {useDispatch} from "react-redux";
import {deleteCarThunk, carToUpdate} from "../../store";

const Car = ({car}) => {
const {id, model, price, year} = car;
    const dispatch = useDispatch();

    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px', gap: '20px'}}>
            <div>
                <div>Model: {model}</div>
                <div>Price: {price}</div>
                <div>Year: {year}</div>
            </div>
            <button onClick={() =>dispatch(deleteCarThunk({id}))}>Delete</button>
            <button onClick={() => dispatch(carToUpdate({car}))}>Update</button>
        </div>
    );
};

export {Car};