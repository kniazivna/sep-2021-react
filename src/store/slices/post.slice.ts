import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {postsService} from "../../services";
import {IPost} from "../../interfaces";

interface IPostState {
    posts: IPost[]
}

const initialState: IPostState = {
    posts: []
}

export const getAllPosts = createAsyncThunk(
    'usersSlice/getAllPosts',
    async (_, {dispatch}) => {
        const {data} = await postsService.getAll();
        dispatch(setPosts({posts: data}))
    }
)

const postsSlice = createSlice({
    name: 'postsSlice',
    initialState,
    reducers: {
        setPosts: (state, action: PayloadAction<{ posts: IPost[] }>) => {
            state.posts = action.payload.posts
        },
    }
});


const postsReducer = postsSlice.reducer;
export default postsReducer;

export const {setPosts} = postsSlice.actions;