import React, {useEffect, useState} from 'react';

import User from "../User/User";
import './Users.css'
// import Post from "../User/Post/Post";

const Users = () => {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(null);
    const [allPosts, setAllPosts] = useState([]);
    const [posts, setPosts] = useState(null);

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
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => setAllPosts(value))
    }, [])

    const getPosts = (userId) => {
        fetch('https://jsonplaceholder.typicode.com/users/' + user.id + '/posts')
            .then(value => value.json())
            .then(value => setPosts(value))
        console.log(userId);
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
                    <button onClick={() => getPosts(userId)}>Get user posts</button>
                </div>
            }
            <div className={'post'}>
                {
                    allPosts.map(value => <div>
                        key={value.id}
                        post={value}
                        }
                    </div>)
                }
            </div>
                {
                    posts && <div className={'posts'}>
                        <p>User id: {post.userId}</p>
                        <p>Id: {post.id}</p>
                        <p>{post.title}</p>
                        <p>{post.body}</p>
                    </div>
                }
            </div>
            );
            };


            export default Users;