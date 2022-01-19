import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

import {Layout} from "./components"

const App = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<Navigate to={'users'}/>}/>

                    <Route>

                    </Route>

                </Route>
            </Routes>

        </div>
    );
};

export default App;