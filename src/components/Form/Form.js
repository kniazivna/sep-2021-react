import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {createCar, updateCarThunk} from "../../store";

const Form = () => {

    const {carForUpdate} = useSelector(state => state['carReducer']);
    const {reset, register, handleSubmit, setValue} = useForm();
    const dispatch = useDispatch();

    useEffect(() => {
        if (carForUpdate) {
            setValue('model', carForUpdate.model)
            setValue('price', carForUpdate.price)
            setValue('year', carForUpdate.year)
        }
    }, [carForUpdate])

    const save = (data) => {
        dispatch(createCar({data}));
        reset();

    }

    const update = (data) => {
        dispatch(updateCarThunk({id: carForUpdate.id, car: data}));
        reset();
    }


    return (

        <form>
            <label>Model: <input type="text" {...register('model')}/></label>
            <label>Price: <input type="text" {...register('price')}/></label>
            <label>Year: <input type="text" {...register('year')}/></label>
            <button onClick={handleSubmit(save)}>Save</button>
            <button onClick={handleSubmit(update)}>Update</button>
        </form>

    );
};

export {Form};