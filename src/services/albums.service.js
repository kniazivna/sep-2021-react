import {axiosServise} from "./axios.servise";
import {urls} from "../configs/urls";

export const albumsService = {
    getAll: () => axiosServise.get(urls.albums)
        .then(value => value.data),

    getById: (id) => axiosServise(`${urls.albums}/${id}`)
        .then(value => value.data),

    getUsersAlbums: (id) => axiosServise(`${urls.users}/${id}/albums`)
        .then(value => value.data)
}
