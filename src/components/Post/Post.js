import React from 'react';
import {Link} from "react-router-dom";
import css from "../Post/Post.module.css";

const Post = ({post}) => {

    const {id, title} = post;
    return (
        <div className={css.post}>
            <Link to={id.toString()} state={post}>Show post details</Link>
            <h3>Title: {title}</h3>
        </div>
    );
};

export default Post;