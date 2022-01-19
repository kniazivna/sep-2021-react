import React, {useEffect, useState} from 'react';

import {postsService} from "../../services/posts.servise";
import Post from "../../components/Post/Post";
import {Outlet} from "react-router-dom";
import css from "./PostsPage.module.css";

const PostsPage = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postsService.getAll()
            .then(value => setPosts([...value]));
    }, [])
    return (
        <div>
            <h1>Posts page</h1>
                <div className={css.wrapper}>
                    <div>
                        {
                            posts.map(value => <Post key={value.id} post={value}/>)
                        }
                    </div>
                    <div>
                        <Outlet/>
                    </div>
                </div>
        </div>
    );
};

export default PostsPage;