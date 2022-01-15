import React, {useState} from 'react';

import './App.css'
import Users from "./components/Users/Users";
import UserDetails from "./components/UserDetails/UserDetails";
import Posts from "./components/Posts/Posts";
import {postsService} from "./services/posts.service";

const App = () => {

    const [user, setUser] = useState(null);

    const getUser = (user) =>{
setUser(user)
    }

    return (
        <div>
          <div className={'wrapper'}>
            <Users getUser={getUser}/>
              {user && <UserDetails user={user}/>}
          </div>
            <Posts/>
        </div>
    );
};

export default App;