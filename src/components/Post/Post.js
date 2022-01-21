import React from 'react';
import {Link} from "react-router-dom";

const Post = ({post}) => {

    const {id, title} = post;

    return (
        <div>
            <p>Post id: {id}</p>
            <p>Title: {title}</p>
            <Link to={id.toString()} state={post}>
                <button>Show post's details</button>
            </Link>
        </div>
    );
};

export {Post};