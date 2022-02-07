import React, {FC} from 'react';
import {NavLink} from "react-router-dom";

const Header:FC = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightblue',
            gap: '50px', minHeight: '100px'}}>
            <NavLink style={{color: 'darkslateblue', fontWeight: 'bold', textDecoration: 'none', fontSize: '30px'}}
                     to={'users'}>Users</NavLink>
            <NavLink style={{color: 'darkslateblue', fontWeight: 'bold', textDecoration: 'none', fontSize: '30px'}}
                     to={'posts'}>Posts</NavLink>
        </div>
    );
};

export {Header};