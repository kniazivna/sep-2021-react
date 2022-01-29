import React, {useState} from 'react';
import {Cars, Form} from "./components";

const App = () => {

    const [cars, setCars] = useState([]);

    const getFormData = (data) => {
        setCars([...cars, {id: new Date().getTime(), ...data}])
    }

    const getCarId = (id) => {
        setCars(cars =>cars.filter(car => car.id !== id))
    }

    return (
        <div>
            <Form/>
            <Cars getCarId={getCarId}/>

        </div>
    );
};

export default App;