import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {usersService} from "../../services";
import {IUser} from "../../interfaces";

interface IUserState {
    users: IUser[]
}

const initialState: IUserState = {
    users: []
}

export const getAllUsers = createAsyncThunk(
    'usersSlice/getAllUsers',
    async (_, {dispatch}) => {
        const {data} = await usersService.getAll();
        dispatch(setUsers({users: data}))
    }
)

const usersSlice = createSlice({
    name: 'usersSlice',
    initialState,
    reducers: {
        setUsers: (state, action: PayloadAction<{ users: IUser[] }>) => {
            state.users = action.payload.users
        },
    }
});


const usersReducer = usersSlice.reducer;
export default usersReducer;

export const {setUsers} = usersSlice.actions;

