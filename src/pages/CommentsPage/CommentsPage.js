import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";

import {commentsService} from "../../services/comments.service";
import Comments from "../../components/Comments/Comments";

const CommentsPage = () => {

    const [comments, setComments] = useState([]);
    const {id} = useParams();
    const {state} = useLocation();

    useEffect(() => {
        if (state) {
            setComments(state);
            return
        }
        commentsService.getByPostId(id)
            .then(value => setComments([...value]))
    }, [id])

    return (
        <div>
            {
                comments.map(value => <Comments key={value.id} postComments={value}/>)
            }
        </div>
    );
};

export default CommentsPage;