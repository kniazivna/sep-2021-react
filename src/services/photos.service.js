import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const photosService = {
    getByUserId: (id) => axiosService.get(`${urls.photos}?albumId=${id}`).then(value => value.data)
}