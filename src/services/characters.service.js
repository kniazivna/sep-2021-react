import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const charactersServise = {

    getAll: () => axiosService.get(urls.characters)
        .then(value => value.data),

    getById: (id) => axiosService.get(`${urls.characters}/${id}`)
        .then(value => value.data)
}