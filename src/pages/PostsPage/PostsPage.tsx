import React, {FC, useEffect} from 'react';

import {Post} from "../../components";
import {getAllPosts} from "../../store";
import {useAppDispatch, useAppSelector} from "../../hooks"

const PostsPage:FC = () => {

    const {posts} = useAppSelector(state => state['postsReducer']);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getAllPosts())
    }, [])

    return (
        <div style={{paddingLeft: '50px'}}>
            {
                posts.map(post => <Post key={post.id} post={post}/>)
            }
        </div>
    );
};

export {PostsPage};