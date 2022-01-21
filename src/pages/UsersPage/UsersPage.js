import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import {usersService} from "../../services/users.servise";
import {User} from "../../components";
import css from "./UsersPage.module.css"

const UsersPage = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
            usersService.getAll()
                .then(value => setUsers([...value]));
        }
        , [])

    return (
        <div className={css.usersPage}>
            <div>
                {
                    users.map(value => <User key={value.id} user={value}/>)
                }
            </div>
            <div className={css.block}>
                <Outlet/>
            </div>
        </div>
    );
};

export {UsersPage};