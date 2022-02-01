import React, {useEffect} from 'react';

import {Comment} from "../../components";
import css from "./CommentsPage.module.css"
import {useDispatch, useSelector} from "react-redux";
import {getAllComments} from "../../store";
import commentsReducer from "../../store/comments.slice";

const CommentsPage = () => {

    const {comments, status, error} = useSelector(state => state['commentsReducer']);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllComments())
    }, [])

    return (
        <div className={css.commentsPage}>
            {
                status === 'Loading/pending' && <h1>Loading...</h1>
            }
            {
                error && <h2>{error}</h2>
            }
            {
                comments.map(value => <Comment key={value.id} comment={value}/>)
            }
        </div>
    );
};

export {CommentsPage};