import {createSlice} from "@reduxjs/toolkit";


const toDoList = createSlice({
    name: 'toDoList.slice',
    initialState: {
        toDoList: []
    },
    reducers: {
        addToDoItem: (state, action) => {
            state.toDoList.push({
                id:new Date().getTime(),
                ...action.payload.data})
        },
    }
})

const  toDoListReducer = toDoList.reducer;
const {addToDoItem} = toDoList.actions;

export default  toDoListReducer;

export const toDoListActions = {addToDoItem};