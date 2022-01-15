import React, {useEffect, useState} from 'react';

import {usersService} from "../../services/users.service";
import User from "../User/User";
import  './Users.css';

const Users = ({getUser}) => {

   const [users, setUsers] = useState([]);

   useEffect(() => {
       usersService.getAll()
           .then(value => setUsers(value))
   },[])

    return (
        <div className={'users'}>
            {
                users.map(item => <User key={item.id} user={item} getUser={getUser}/>)
            }
        </div>
    );
};

export default Users;