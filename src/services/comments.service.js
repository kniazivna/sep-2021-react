import {axiosServise} from "./axios.servise";
import {urls} from "../configs/urls";

export const commentsService = {
    getAll: () => axiosServise.get(urls.comments)
        .then(value => value.data),

    getByPostId: (id) => axiosServise.get(`${urls.comments}?postId=${id}`)
        .then(value => value.data)
}