import React, {useEffect, useState} from 'react';

import {userServices} from "../../services/user.services";
import User from "../User/User";
import './Users.css'

const Users = ({getUser}) => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        userServices.getAll()
            .then(value => setUsers(value))
    }, [])

    return (
        <div className={'details'}>
            {
                users.map(value => <User key={value.id} user={value} getUser={getUser}/>)
            }
        </div>
    );
};


export default Users;