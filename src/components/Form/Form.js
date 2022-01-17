import React from 'react';
import {useForm} from "react-hook-form";
import {carsService} from "../../services/cars.services";

const Form = ({update}) => {

    const {register, handleSubmit} = useForm();

    const submit = (car) => {
        //створюємо car
        //НЕПРАВИЛЬНО!!!!!!!
       // const item = carsService.create(car)
       //      .then(value => console.log(value));
       // update(item);//оновлюється масив з машинами

        //ПРАВИЛЬНО!!!!!
        carsService.create(car)
             .then(value => update(value));
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <label>Model: <input type="text" defaultValue={''}{...register('model')}/></label>
                <label>Price: <input type="text" defaultValue={''}{...register('price')}/></label>
                <label>Year: <input type="text" defaultValue={''}{...register('year')}/></label>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default Form;