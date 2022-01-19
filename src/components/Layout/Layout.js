import React from 'react';
import {Outlet} from "react-router-dom";

import {Header} from "../Header/Header";


const Layout = () => {
    return (
        <div>
            layout
            <Header/>
            <Outlet/>
        </div>
    );
};

export {Layout};