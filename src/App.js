import './App.css';

import Users from "./components/Users/Users";

import Posts from "./components/Posts/Posts";

import Comments from "./components/Comments/Comments";

export default function App() {

    return (
        <div className="wrapper">
            <Users/>
            <Posts/>
            <Comments/>
        </div>
    );

}


