import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {postsService} from "../../services/posts.servise";

const PostPage = () => {

    const {id} = useParams();
    const [post, setPost] = useState(null);
    const [postId, setPostId] = useState(null);

    const {state} = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (state) {
            setPost(state)
            return
        }
        postsService.getById(id)
            .then(value => setPost({...value}));
    }, [])

    const back = () => {
        navigate(-1)
    }

    const getPostId = () => {
        setPostId()
    }


    return (

        <div>
            <button onClick={back}>Back</button>
            {post && (
                <div>
                    <p>Id: {post.id}</p>
                    <p>User id: {post.userId}</p>
                    <h3>Title: {post.title}</h3>
                    <p>Body: {post.body}</p>
                    <button onClick={}>Post details</button>
                </div>
            )}

        </div>
    );
};

export default PostPage;