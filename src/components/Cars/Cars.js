import React, {useEffect, useState} from 'react';
import {carsService} from "../../services/cars.services";
import Car from "../Car/Car";

const Cars = ({item}) => {

    const [cars, setCars] = useState([]);

    useEffect(() => {
        carsService.getAll()
        .then(value => setCars([...value]))
    },[item])//щоб обновити масив

    return (
        <div>
            {
                cars.map(value => <Car key={value.id} car={value}/>)
            }
        </div>
    );
};


export default Cars;