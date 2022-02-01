import {createSlice} from "@reduxjs/toolkit";


const toDoList = createSlice({
    name: 'toDoList.slice',
    initialState: {
        toDoList: [],
        doneItemCounter: 0
    },
    reducers: {
        addToDoItem: (state, action) => {
            state.toDoList.push({
                id: new Date().getTime(),
                status: false,
                ...action.payload.data
            })
        },
        deleteToDoItem: (state, action) => {
            state.toDoList = state.toDoList.filter(item => item.id !== action.payload.id)
            if(!state.toDoList.status){
                --state.doneItemCounter;
            }
        },
        checkToDoItem: (state, action) => {
             const checked = state.toDoList.find(item => item.id === action.payload.id)
             Object.assign(checked, {status: !checked.status})/*посилання на обєкт не міняється, замінюємо 1 обєкт іншим*/
             if (checked.status) {
                 ++state.doneItemCounter;
             } else if (!checked.status) {
                 --state.doneItemCounter;
             }
        },
    }

})

const toDoListReducer = toDoList.reducer;
export default toDoListReducer;

const {addToDoItem, deleteToDoItem, checkToDoItem} = toDoList.actions;
export const toDoListActions = {addToDoItem, deleteToDoItem, checkToDoItem};



