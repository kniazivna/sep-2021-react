import React, {FC} from 'react';
import {Outlet} from "react-router-dom";

import {Header} from "../Header/Header";



const Layout:FC = () => {
    return (
        <div>
            <Header/>
            <div style={{margin: '0 auto', padding: '2%', backgroundColor: 'aliceblue'}}>
                <Outlet/>
            </div>
        </div>
    );
};

export {Layout};