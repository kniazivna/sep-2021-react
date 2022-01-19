import React from 'react';

const Comments = ({postComments}) => {

    const {postId, id, name, email, body} = postComments;

    return (
        <div>
            <p>Post id: {postId}</p>
            <p>Id: {id}</p>
            <h3>{name} -- {email}</h3>
            <p>{body}</p>
        </div>
    );
};

export default Comments;