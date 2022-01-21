import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {commentsService} from "../../services/comments.service";
import {Comment} from "../../components";

const PostCommentsPage = () => {
    
    const [comments,setComments] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        commentsService.getByPostId(id)
            .then(value => setComments([...value]));
    },[id])

    return (
        <div>
            {
                comments.map(value => <Comment key={value.id} comment={value}/>)
            }
        </div>
    );
};

export {PostCommentsPage};