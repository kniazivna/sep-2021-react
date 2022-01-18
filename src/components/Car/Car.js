import React from 'react';
import {carsService} from "../../services/cars.services";

const Car = ({car, update}) => {

    const {id, model, price, year} = car;

    const remove = (id) => {
        //delete car
        carsService.deleteById(id)
            .then(value => update(value));
    }
    const change = (id) => {
        carsService.updateById(id, {model:'OKA'})
            .then(value => {
                if (value.model !== 'www')

                update(value);
            })
    }

    return (
        <div>
            <p>Id: {id}</p>
            <p>Model: {model}</p>
            <p>Price: {price}</p>
            <p>Year: {year}</p>
            <button onClick={() => remove(id)}>Delete</button>
            <button onClick={() => change(id)}>Change</button>

        </div>
    );
};

export default Car;