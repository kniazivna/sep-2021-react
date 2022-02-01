import React, {useEffect} from 'react';

import {Post} from "../../components";
import css from "./PostsPage.module.css"
import {useDispatch, useSelector} from "react-redux";
import {getAllPosts} from "../../store";

const PostsPage = () => {

    const {posts, status, error} = useSelector(state => state['postsReducer']);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllPosts())
    }, [])

    return (
        <div className={css.postsPage}>
            {
                status === 'Loading/pending' && <h1>Loading...</h1>
            }
            {
                error && <h2>{error}</h2>
            }
            {
                posts.map(value => <Post key={value.id} post={value}/>)
            }
        </div>
    );
};

export {PostsPage};