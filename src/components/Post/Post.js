import React from 'react';

import './Post.css'

const Post = ({post}) => {

    const {userId, id, title, body} = post;

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