import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";

import {toDoListActions} from "../../store";
import {ToDoItem} from "../ToDoItem/ToDoItem";
import toDoListReducer from "../../store/toDoList.slice";
import css from './CreateToDoList.module.css';

const CreateToDoList = () => {

    const {toDoList, doneItemCounter} = useSelector(state => state['toDoListReducer']);

    const {handleSubmit, register, reset} = useForm();
    const dispatch = useDispatch();

    const submit = (data) => {
        dispatch(toDoListActions.addToDoItem({data}))
        reset()
    }

    return (
        <div className={css.listCreator}>
            <h1>All: {toDoList.length} Completed:{doneItemCounter} </h1>
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