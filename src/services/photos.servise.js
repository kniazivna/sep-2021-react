import {axiosServise} from "./axios.servise";
import {urls} from "../configs/urls";

export const photosService = {
    getAll: () => axiosServise.get(urls.photos)
        .then(value => value.data),

    getById: (albumId) => axiosServise(`${urls.photos}/?albumId=${albumId}`)
        .then(value => value.data),

    getUsersAlbumPhotos: (id,albumId) => axiosServise(`${urls.users}/${id}/albums/${albumId}/photos`)
        .then(value => value.data)
}
