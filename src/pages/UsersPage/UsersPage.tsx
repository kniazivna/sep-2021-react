import React, {FC, useEffect} from 'react';

import {User} from "../../components";
import {getAllUsers} from "../../store";
import {useAppDispatch, useAppSelector} from "../../hooks"

const UsersPage:FC = () => {

    const {users} = useAppSelector(state => state['usersReducer']);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getAllUsers())
    }, [])

    return (
        <div style={{paddingLeft: '50px'}}>
            {
                users.map(user => <User key={user.id} user={user}/>)
            }
        </div>
    );
};

export {UsersPage};