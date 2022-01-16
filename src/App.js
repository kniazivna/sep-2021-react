import React, {useEffect, useState} from 'react';
import Form from "./components/Form/Form";
import Users from "./components/Users/Users";
import {usersService} from "./servises/user.servise";

const App = () => {

    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);

    useEffect(() =>{
        usersService.getAll()
            .then(value => {
                setUsers([...value]);
                setFilteredUsers([...value])
            })
    },[])

    const getFiltered = (input) =>{
        let filteredUsersArr = [...users];

        if(input.name){
            filteredUsersArr = filteredUsersArr.filter(user => user.name.toLowerCase().includes(input.name.toLowerCase()))
        }
        if(input.username){
            filteredUsersArr = filteredUsersArr.filter(user => user.username.toLowerCase().includes(input.username.toLowerCase()))
        }
        if(input.email){
            filteredUsersArr = filteredUsersArr.filter(user => user.email.toLowerCase().includes(input.email.toLowerCase()))
        }

        setFilteredUsers(filteredUsersArr);

    }

  return (
      <div>
        <Form getFiltered={getFiltered}/>
        <Users users={filteredUsers}/>
      </div>
  );
};

export default App;

