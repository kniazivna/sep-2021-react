import React, {useEffect, useState} from 'react';

import {postsService} from "../../services/posts.service";
import {UserPosts} from "../../components";
import {useParams} from "react-router-dom";


const UserPostsPage = () => {

    const [posts, setPosts] = useState([]);
    const {id} = useParams();

    useEffect(() =>{
        postsService.getByUserId(id)
            .then(value => setPosts(value))
    },[])



    return (
        <div>
            {
                posts.map(value => <UserPosts key={value.id} post={value}/>)
            }
        </div>
    );
};
export {UserPostsPage};
