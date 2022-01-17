import React, {useEffect, useState} from 'react';
import {carsService} from "../../services/cars.services";
import Car from "../Car/Car";

const Cars = ({item, remover,elem}) => {

    const [cars, setCars] = useState([]);

    useEffect(() => {
        carsService.getAll()
        .then(value => setCars([...value]))
    },[item, elem])//щоб обновити масив

    return (
        <div>
            {
                cars.map(value => <Car key={value.id} car={value} remover={remover}/>)
            }
        </div>
    );
};


export default Cars;