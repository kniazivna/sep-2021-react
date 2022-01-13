
const getAll = () => {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())
}

const getDetails = (id) => {
    return fetch(`https://jsonplaceholder.typicode.com/users/`+ id )
        .then(value => value.json())
}

const getPosts = (id) => {
    return fetch('https://jsonplaceholder.typicode.com/users/'+ id + '/posts')
        .then(value => value.json())
}

export const userServices = {
    getAll,
    getDetails,
    getPosts
}