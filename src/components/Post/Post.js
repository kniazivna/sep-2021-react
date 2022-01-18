import React from 'react';
import {Link} from "react-router-dom";

const Post = ({post}) => {

    const {id, title} = post;
    return (
        <div>
            <Link to={id.toString()} state={post}>Id: {id}</Link>
            <h3>Title: {title}</h3>
            <hr/>
        </div>
    );
};

export default Post;