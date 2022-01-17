import React from 'react';
import {carsService} from "../../services/cars.services";

const Car = ({car, update}) => {

    const {id, model, price, year} = car;

    const remove = (id) => {
        //delete car
        carsService.deleteById(id)
            .then(value => update(value));
    }


    return (
        <div>
            <p>Id: {id}</p>
            <p>Model: {model}</p>
            <p>Price: {price}</p>
            <p>Year: {year}</p>
            <button onClick={() => remove(id)}>Delete</button>

        </div>
    );
};

export default Car;