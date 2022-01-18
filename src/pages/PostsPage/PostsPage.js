import React, {useEffect, useState} from 'react';

import {postsService} from "../../services/posts.servise";
import Post from "../../components/Post/Post";

const PostsPage = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postsService.getAll()
            .then(value => setPosts([...value]));
    },[])
    return (
        <div>
           <h1>Posts page</h1>
            {
                posts.map(value => <Post key={value.id} post={value}/>)
            }
        </div>
    );
};

export default PostsPage;