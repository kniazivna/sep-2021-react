import {urls} from "../configs/urls";

export const usersService = {
    getAll: () => fetch(`https://jsonplaceholder.typicode.com${urls.users}`)
        .then(value => value.json())
}