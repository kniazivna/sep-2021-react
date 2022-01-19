import React from 'react';

const PostForDetails = ({userPost}) => {

    const {id, userId, title, body} = userPost;

    return (
        <div>
                    <p>id: {id}</p>
                    <p>userId: {userId}</p>
                    <p>title: {title}</p>
                    <p>body: {body}</p>
        </div>
    );
};

export default PostForDetails;