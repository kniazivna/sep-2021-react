import React, {useEffect, useState} from 'react';
import {Link, Outlet, useLocation, useNavigate, useParams} from "react-router-dom";

import {postsService} from "../../services/posts.service";
import css from "./PostDetailsPage.module.css"

const PostDetailsPage = () => {

    const {id} = useParams();
    const [post,setPost] = useState(null);
    const navigate = useNavigate();
    const {state} = useLocation();

    useEffect(() => {
        if(state){
          setPost(state);
          return
        }
        postsService.getById(id)
            .then(value => setPost({...value}))
    },[id])

    const back = () => {
        navigate(-1);
    }

    return (
        <div className={css.block}>
            <div>
                <button onClick={back}>Back</button>
                {
                post && (
                    <div>
                        <p>Post id: {post.id}</p>
                        <h3>Title: {post.title}</h3>
                        <p>Body: {post.body}</p>
                        <Link to={'comments'}>
                            <button>Show post's comments</button>
                        </Link>
                    </div>
                )
            }
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export {PostDetailsPage};