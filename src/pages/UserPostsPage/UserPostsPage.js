import React, {useEffect, useState} from 'react';
import {postsService} from "../../services/posts.servise";
import {useLocation, useParams} from "react-router-dom";
import PostForDetails from "../../components/PostForDetails/PostForDetails";

const UserPostsPage = () => {

    const [posts, setPosts] = useState([]);
    const {id} = useParams();
    const {state} = useLocation();

    useEffect(() => {
        if (state) {
            setPosts(state);
            return
        }
        postsService.getByUserId(id)
            .then(value => setPosts([...value]))
    }, [id])

    return (
        <div>
            {
                posts.map(value => <PostForDetails key={value.id} userPost={value}/>)
            }
        </div>
    );
}

export default UserPostsPage;