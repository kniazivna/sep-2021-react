import React, {useEffect, useRef} from 'react';

const ToDoItem = ({toDoItem}) => {

    const itemRef = useRef();

    useEffect(() => {

    },[])

const {id, whatToDo} = toDoItem;
    return (
        <div>
            <input type="checkbox" ref={itemRef}/><span>{whatToDo}</span>
        </div>
    );
};

export {ToDoItem};