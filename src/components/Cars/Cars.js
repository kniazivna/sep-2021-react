import React, {useEffect} from 'react';
import {Car} from "../Car/Car";
import {useDispatch, useSelector} from "react-redux";
import carReducer, {getAllCars} from "../../store/car.slice";


const Cars = () => {

    const {cars, status, error} = useSelector(state => state['carReducer']);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCars())
    },[])

    return (
        <div>
            {
                status === 'Loading/pending' && <h1>Loading...</h1>
            }
            {
                error && <h2>{error}</h2>
            }
            {
                cars.map(car => <Car key={car.id} car={car}/>)
            }
        </div>
    );
};

export {Cars};