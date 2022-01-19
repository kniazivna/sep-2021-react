import React, {useEffect, useState} from 'react';
import {Link, Outlet, useLocation, useNavigate, useParams} from "react-router-dom";

import {postsService} from "../../services/posts.servise";
import css from "./PostPage.module.css"

const PostPage = () => {

    const {id} = useParams();
    const [post, setPost] = useState(null);


    const {state} = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (state) {
            setPost(state);
            return
        }
        postsService.getById(id)
            .then(value => setPost({...value}));
    }, [])

    const back = () => {
        navigate(-1)
    }

    return (

        <div className={css.postBlock}>
            <button onClick={back}>Back</button>
            {post && (
                <div>
                    <p>Id: {post.id}</p>
                    <p>User id: {post.userId}</p>
                    <h3>Title: {post.title}</h3>
                    <p>Body: {post.body}</p>
                    <Link to={'comments'}><button>Show post's comments</button></Link>
                    <div>
                        <Outlet/>
                    </div>
                </div>
            )}

        </div>
    );
};

export default PostPage;