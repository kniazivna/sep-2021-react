import React, {useState} from 'react';

import './App.css'
import Users from "./components/Users/Users";
import UserDetails from "./components/UserDetails/UserDetails";
import Posts from "./components/Posts/Posts";


const App = () => {

    const [user, setUser] = useState(null);
    const [userId, setUserId] = useState(null);

    const getUser = (user) => {
        setUser(user);
        setUserId(null);
    }

    const getUserId = (id) => {
        setUserId(id)
    }

    return (
        <div>
            <div className={'wrapper'}>
                <Users getUser={getUser}/>
                {user && <UserDetails user={user} getUserId={getUserId}/>}
            </div>
            {userId && <Posts userId={userId}/>}
        </div>
    );
};

export default App;