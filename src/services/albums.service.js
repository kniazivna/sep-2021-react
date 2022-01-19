import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const albumsService = {
    getByUserId: (id) => axiosService.get(`${urls.albums}?userId=${id}`).then(value => value.data)
}