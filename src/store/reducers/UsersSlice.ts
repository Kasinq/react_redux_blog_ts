import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { usersFetch, usersFetchingSuccess } from "../../models/IActions"
import { IGetUsers, IUser } from "../../models/IUser"


interface UsersState {
    users: IUser[]
    isFriend: number[]
    count: number
    limit: number
    page: number
    isLoading: boolean
    error: string
}

const initialState: UsersState = {
    users: [],
    count: 0,
    isFriend: [],
    limit: 6,
    page: 1,
    isLoading: false,
    error: '',
}

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        usersFetching(state) {
            state.isLoading = true
        },
        usersFetchingSuccess(state, action: PayloadAction<usersFetch>) {
            state.isLoading = false
            state.error = ''
            state.users = action.payload.data.users.rows
            state.isFriend = action.payload.data.isFriend
            state.count = action.payload.data.users.count
            state.page = action.payload.page|| 1
        },
        usersFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false
            state.error = action.payload
        },
    },
})

export default usersSlice.reducer