import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import css from './ToDoItem.module.css';
import {toDoListActions} from "../../store";
import toDoListReducer from "../../store/toDoList.slice";


const ToDoItem = ({toDoItem}) => {

    const {id, whatToDo, status} = toDoItem;
    const dispatch = useDispatch();
    const {toDoList} = useSelector(state => state['toDoListReducer']);


    const deleteItem = (e) => {
        e.preventDefault();
        dispatch(toDoListActions.deleteToDoItem({id}))
    }

    const checkToDoItem = () => {
        dispatch(toDoListActions.checkToDoItem({id}))
    }


    return (
        <div className={css.list}>
            <div className={css.container}>
                <label className={status ? css.checked : ''}> <input type="checkbox" value={status}
                                                                     onChange={checkToDoItem}/>{whatToDo}</label>
                <button onClick={deleteItem}>Delete</button>
            </div>
        </div>
    );
};

export {ToDoItem};