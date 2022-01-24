import {axiosService} from "./axios.service";
import  {urls} from "../configs/urls";

export const episodesService ={

    getAll: () => axiosService.get(urls.episodes)
        .then(value => value.data),

    getById: (id) => axiosService.get(`${urls.episodes}/${id}`)
        .then(value => value.data)
}