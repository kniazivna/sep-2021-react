import {axiosServise} from "./axios.servise";
import {urls} from "../configs/urls";

export const usersService = {
    getAll: () => axiosServise.get(urls.users)
        .then(value => value.data),

    getById: (id) => axiosServise(`${urls.users}/${id}`)
        .then(value => value.data),

    getUsersAlbums: (id) => axiosServise(`${urls.users}/${id}/albums`)
        .then(value => value.data)
}

