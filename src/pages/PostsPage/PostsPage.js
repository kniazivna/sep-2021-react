import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import {postsService} from "../../services/posts.service";
import {Post} from "../../components";
import css from "./Postspage.module.css"

const PostsPage = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() =>{
        postsService.getAll()
            .then(value => setPosts(value))
    },[])

    return (
        <div className={css.postsPage}>
            <div className={css.block}>
                {
                posts.map(value => <Post key={value.id} post={value}/>)
            }
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export {PostsPage};