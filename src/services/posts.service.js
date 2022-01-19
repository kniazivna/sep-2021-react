import {axiosServise} from "./axios.servise";
import {urls} from "../configs/urls";

export const postsService = {
    getAll: () => axiosServise.get(urls.posts)
        .then(value => value.data),

    getById: (id) => axiosServise(`${urls.posts}/${id}`)
        .then(value => value.data),

    getByUserId: (id) => axiosServise(`${urls.posts}/?userId=${id}`)
        .then(value => value.data)
}