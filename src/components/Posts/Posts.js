import React, {useEffect, useState} from 'react';

import Post from "../Post/Post";

import "./Posts.css"


const Posts = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(value => setPosts(value))
    },[])

    return (
        <div className="w50">
            {posts.map(value => <Post key={value.id}
                                      userId={value.userId}
                                      id={value.id}
                                      title={value.title}
                                      body={value.body}
            />)}
        </div>
    );
};


export default Posts;