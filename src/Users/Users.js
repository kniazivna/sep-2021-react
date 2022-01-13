import React, {useEffect, useState} from 'react';

import User from "../User/User";
import './Users.css'
import Post from "../User/Post/Post";

const Users = () => {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(null);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => setUsers(value))
    }, [])

    const getDetails = (id) => {
        fetch('https://jsonplaceholder.typicode.com/users/' + id)
            .then(value => value.json())
            .then(value => setUser(value))
    }

    const getPosts = (id) => {
        fetch('https://jsonplaceholder.typicode.com/users/' + user.id + '/posts')
            .then(value => value.json())
            .then(value => setPosts(value))
        console.log(id);
    }


    return (
        <div className={'userList'}>
            <div className={'user'}>
                {
                    users.map(value => <User
                        key={value.id}
                        user={value}
                        getDetails={getDetails}
                    />)
                }
            </div>
            {
                user && <div className={'details'}>
                    <p> {user.id} -- {user.name}</p>
                    <p>username:{user.username}</p>
                    <p>email:{user.email}</p>
                    <p>address:</p>
                    <p>street:{user.address.street}</p>
                    <p>suite:{user.address.suite}</p>
                    <p>city:{user.address.city}</p>
                    <p>zipcode:{user.address.zipcode}</p>
                    <p>geo:</p>
                    <p>lat:{user.address.geo.lat}</p>
                    <p>lng:{user.address.geo.lng}</p>
                    <p>phone:{user.phone}</p>
                    <p>website:{user.website}</p>
                    <p>company:</p>
                    <p>name:{user.company.name}</p>
                    <p>catchPhrase:{user.company.catchPhrase}</p>
                    <p>bs:{user.company.bs}</p>
                    <button onClick={() => getPosts()}>Get user posts</button>
                </div>
            }
            <div className={'post'}>
                {
                    posts.map(value => <Post
                        key={value.id}
                        post={value}
                    />)
                }
            </div>

            </div>
            );
            };


            export default Users;