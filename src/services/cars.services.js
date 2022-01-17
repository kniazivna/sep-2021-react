import axiosServise from "./axios.servise";
import {urls} from "../configs/urls";

export const carsService = {

    getAll: () => axiosServise.get(urls.cars)
        .then(value => value.data),

    create: (car) => axiosServise.post(urls.cars, car)
        .then(value => value.data),


    getById: (id) => axiosServise.get(`${urls.cars}/${id}`)
        .then(value => value.data),

    updateById: (id, car) => axiosServise.patch(`${urls.cars}/${id}`, car)
        .then(value => value.data),

    deleteById: (id) => axiosServise.delete(`${urls.cars}/${id}`)
}