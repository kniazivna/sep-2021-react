import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const postsService = {
    getByUserId:(id) => axiosService.get(`${urls.posts}?userId=${id}`)
        .then(value => value.data)
}