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

export const postsSlice = createSlice({
    name: 'postDitail',
    initialState,
    reducers: {
        postsFetching(state) {
            state.isLoading = true
        },
        postsFetchingSuccess(state, action: PayloadAction<postsFetching>) {
            state.isLoading = false
            state.error = ''
            state.posts = action.payload.data.rows
            state.totalCount = action.payload.data.count
            state.page = action.payload.page || 1
            state.rating = action.payload.data.rating || 'new'
        },
        postsFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false
            state.error = action.payload
        },
    },
})

export default postsSlice.reducer