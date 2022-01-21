import React from 'react';

const UserPosts = ({post}) => {
   const {userId, id, title, body} = post;
    return (
        <div>
            <p>User id: {userId}</p>
            <p>Id: {id}</p>
            <h3>Title: {title}</h3>
            <p>Body: {body}</p>
        </div>
    );
};

export {UserPosts};