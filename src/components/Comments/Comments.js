import React, {useEffect, useState} from 'react';

import Comment from "../Comment/Comment";

import "./Comments.css"


const Comments = () => {

    const [comments, setcomments] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => response.json())
            .then(value => setcomments(value))
    },[])

    return (
        <div className="w100">
            {comments.map(value => <Comment key={value.id}
                                            postId={value.postId}
                                            id={value.id}
                                            name={value.name}
                                            email={value.email}
                                            body={value.body}
            />)}
        </div>
    );
};


export default Comments;