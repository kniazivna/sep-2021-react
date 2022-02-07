import {axiosService} from "./axios.service";
import {urls} from "../configs";
import {IUser} from "../interfaces";

export const usersService = {
    getAll: () => axiosService.get<IUser[]>(urls.users)
}