import React from 'react';

const Post = ({post: {userId, id, title, body}}) =>{
    return (
        <div>
            <p>User id: {userId}</p>
            <p>Id: {id}</p>
            <h4>{title}</h4>
            <p>{body}</p>
        </div>
    );
};

export default Post;