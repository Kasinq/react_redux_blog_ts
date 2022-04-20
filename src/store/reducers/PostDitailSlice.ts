import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IPost } from "../../models/IPosts"

interface postState {
    post: IPost
    isLoading: boolean
    error: string
}

const initialState: postState = {
    post: {},
    isLoading: true,
    error: '',
}

export const postDitailSlice = createSlice({
    name: 'postDitail',
    initialState,
    reducers: {
        postDitailFetching(state) {
            state.isLoading = true
        },
        postDitailFetchingSuccess(state, action: PayloadAction<IPost>) {
            state.isLoading = false
            state.error = ''
            state.post = action.payload
        },
        postDitailFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false
            state.error = action.payload
        },
    },
})

export default postDitailSlice.reducer