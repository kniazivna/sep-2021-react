import React, {useEffect, useState} from 'react';

import Post from "../Post/Post";
import {postsService} from "../../services/posts.service";

const Posts = ({userId}) => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postsService.getByUserId(userId)
            .then(value => setPosts(value))
    }, [userId])

    return (
        <div>
            {
                posts.map(value => <Post key={value.id} post={value}/>)
            }
        </div>
    );
};

export default Posts;