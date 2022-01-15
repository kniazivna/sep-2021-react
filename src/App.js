import React, {useState} from 'react';

import Users from "./components/Users/Users";
import Details from "./components/Details/Details";
import Posts from "./components/Posts/Posts";
import './App.css'
import {postServices} from "./services/post.services";

const App = () => {

    const [user,setUser] = useState(null);
    const [posts, setPosts] = useState([]);

    const getUser = (user) => {
setUser(user);
setPosts([]);
    }

    const getUserId = (id) => {
        postServices.getPosts(id)
            .then(value => setPosts(value))
    }


    return (
        <div>
            <div className={'wrapper'}>
                <Users getUser={getUser}/>
                {user && <Details user={user} getUserId={getUserId}/>}
            </div>
            {!!posts.length && <Posts posts={posts}/>}
        </div>
    );
};


export default App;