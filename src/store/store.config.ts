import {combineReducers, configureStore} from '@reduxjs/toolkit';

import postsReducer from "./slices/post.slice";
import usersReducer from "./slices/user.slice";

const RootReducer = combineReducers({
    postsReducer,
    usersReducer
})

 export const setupStore = () => configureStore({
    reducer: RootReducer
})

export type RootState = ReturnType<typeof RootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];