import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";

import {toDoListActions} from "../../store";
import {ToDoItem} from "../ToDoItem/ToDoItem";
import toDoListReducer from "../../store/toDoList.slice";

const CreateToDoList = () => {

    const {toDoList} = useSelector(state => state['toDoListReducer']);

    const {handleSubmit, register, reset} = useForm();
    const dispatch = useDispatch();

    const submit = (data) => {
        dispatch(toDoListActions.addToDoItem({data}))
        console.log(data);
        reset()
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <label>Write To Do item: <input type="text" {...register('whatToDo')}/></label>
                <button>Save</button>
            </form>
            <hr/>
            {toDoList.map(item => <ToDoItem key={item.id} toDoItem={item}/>)}
        </div>
    );
};

export {CreateToDoList};