import React from 'react';

const Car = ({car}) => {

    const {id, model, price, year} = car;

    return (
        <div>
            <p>Id: {id}</p>
            <p>Model: {model}</p>
            <p>Price: {price}</p>
            <p>Year: {year}</p>
            <button>Delete</button>
        </div>
    );
};

export default Car;