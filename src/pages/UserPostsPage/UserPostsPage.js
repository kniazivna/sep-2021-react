import React, {useEffect, useState} from 'react';
import {postsService} from "../../services/posts.servise";
import {useParams} from "react-router-dom";
import PostForDetails from "../../components/PostForDetails/PostForDetails";

const UserPostsPage = () => {

    const [posts, setPosts] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        postsService.getById(id)
            .then(value => setPosts([...value]))
    },[id])

    return (
        <div>
            {
             posts.map(value=> <PostForDetails key={value.id} userPost={value}/>)
            }


        </div>
    );
}

export default UserPostsPage;