import React, {useEffect} from 'react';

import {User} from "../../components";
import css from "./UsersPage.module.css"
import {useDispatch, useSelector} from "react-redux";
import {getAllUsers} from "../../store";

const UsersPage = () => {

    const {users, status, error} = useSelector(state => state['usersReducer']);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllUsers())
    }, [])

    return (
        <div className={css.usersPage}>
            {
                status === 'Loading/pending' && <h1>Loading...</h1>
            }
            {
                error && <h2>{error}</h2>
            }
                {
                    users.map(value => <User key={value.id} user={value}/>)
                }
        </div>
    );
};

export {UsersPage};