import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {postsService} from "../../services/posts.servise";

const PostPage = () => {

    const {id} = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        postsService.getById(id)
            .then(value => setPost({...value}));
    },[])

    return (

        <div>
            {post && (
                <div>
                    <p>Id: {post.id}</p>
                    <p>User id: {post.userId}</p>
                    <h3>Title: {post.title}</h3>
                    <p>Body: {post.body}</p>
                </div>
            )}

        </div>
    );
};

export default PostPage;