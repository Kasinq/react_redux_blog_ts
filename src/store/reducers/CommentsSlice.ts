import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { commentsFetchingSuccess } from "../../models/IActions"
import { IComent, IComentator, IComentInfo } from "../../models/IComentator"

interface CommentsState {
    comments: IComent[]
    users: IComentator[]
    isLoading: boolean
    error: ''
}

const initialState:CommentsState = {
    comments: [],
    users: [],
    isLoading: false,
    error: '',
}

export const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        commentsFetching(state) {
            state.isLoading = true
        },
        commentsFetchingSuccess(state, action: PayloadAction<IComentInfo>) {
            state.isLoading = false
            state.error = ''
            state.comments = action.payload.comment
            state.users = action.payload.rows
        },
        commentsFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false
        },
    },
})

export default commentsSlice.reducer