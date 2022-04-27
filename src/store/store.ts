import { configureStore, combineReducers } from "@reduxjs/toolkit";
import usersReducer from './reducers/UsersSlice'
import userReducer from './reducers/UserSlice'
import postDitailReducer from './reducers/PostDitailSlice'
import postsReducer from './reducers/PostsSlice'
import commentsReducer from './reducers/CommentsSlice'
import userAuthReducer from './reducers/UserAuthSlice'
import usersPostsSlice from './reducers/UsersPostsSlice'

const rootReducer = combineReducers({
    usersReducer,
    userReducer,
    postDitailReducer,
    postsReducer,
    commentsReducer,
    userAuthReducer,
    usersPostsSlice,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']