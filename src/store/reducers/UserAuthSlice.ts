import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { userFetchingSuccess } from "../../models/IActions"
import { IAuthUser } from "../../models/IUser"

interface userAuthState {
    id: number
    email: string
    exp: number
    iat: number
    role: string
    isLoading: boolean
    error: string
}

const initialState: userAuthState = {
    id: 0,
    email: '',
    exp: 0,
    iat: 0,
    role: 'ADMIN',
    isLoading: false,
    error: '',
}

export const userAuthSlice = createSlice({
    name: 'userAuth',
    initialState,
    reducers: {
        userAuthFetching(state) {
            state.isLoading = true
        },
        userAuthFetchingSuccess(state, action: PayloadAction<IAuthUser>) {
            state.isLoading = false
            state.error = ''
            state.email = action.payload.email
            state.id = action.payload.id
        },
        userAuthFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false
            state.error = action.payload
        },
    },
})

export default userAuthSlice.reducer