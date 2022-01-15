import React from 'react';

const Post = ({post}) => {
    const {userId, id, title, body} = post;


    return (
        <div>
            <p>User id: {userId}</p>
            <p>Id: {id}</p>
            <h3>{title}</h3>
            <p>{body}</p>
        </div>
    );
};

export default Post;