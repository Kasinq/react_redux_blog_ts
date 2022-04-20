import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { postsFetching, postsFetchingSuccess } from "../../models/IActions"
import { IPost } from "../../models/IPosts"

interface PostsState {
    posts: IPost[]
    isLoading: boolean
    error: string
    limit: number
    page: number
    userId: number
    rating: string
    totalCount: number
}

const initialState: PostsState = {
    posts: [],
    totalCount: 0,
    error: '',
    isLoading: false,
    limit: 6,
    page: 1,
    userId: 1,
    rating: 'new',
}

export const usersPostsSlice = createSlice({
    name: 'usersPosts',
    initialState,
    reducers: {
        usersPostsFetching(state) {
            state.isLoading = true
        },
        usersPostsFetchingSuccess(state, action: PayloadAction<postsFetchingSuccess>) {
            state.isLoading = false
            state.error = ''
            state.posts = action.payload.rows
            state.totalCount = action.payload.count
            state.page = action.payload.page || 1
            state.rating = action.payload.rating || 'new'
        },
        usersPostsFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false
            state.error = action.payload
        },
    },
})

export default usersPostsSlice.reducer