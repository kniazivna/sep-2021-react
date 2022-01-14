import React from 'react';

import "./Post.css"

const Post = ({post: {userId, id, title, body}}) =>{
    return (
        <div className={'post'}>
            <p>User id: {userId}</p>
            <p>Id: {id}</p>
            <h4>{title}</h4>
            <p>{body}</p>
        </div>
    );
};

export default Post;