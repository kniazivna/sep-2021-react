import {useEffect, useState} from "react";

import './App.css';
import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";
import {postServices} from "./services/post.services";



function App() {

    const [posts, setPosts] = useState([]);

   const getPosts = (id) => {
        postServices.getPosts(id)
            .then(value => setPosts(value))
    }

    return (
        <div className="App">
            <Users getPosts={{getPosts}}/>
            <Posts posts={posts}/>
        </div>
    );
}

export default App;
