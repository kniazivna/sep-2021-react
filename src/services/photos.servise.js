import {axiosServise} from "./axios.servise";
import {urls} from "../configs/urls";

export const photosService = {
    getAll: () => axiosServise.get(urls.photos)
        .then(value => value.data),

    getById: (albumId) => axiosServise(`${urls.photos}/?albumId=${albumId}`)
        .then(value => value.data),
}
