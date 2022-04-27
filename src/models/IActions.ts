import { IComent, IComentator } from "./IComentator"
import { IPost } from "./IPosts"
import { IUser } from "./IUser"

export interface postsFetchingSuccess {
    rows: IPost[],
    count: number,
    page?: number,
    rating?: string
}

export interface postsFetching {
    data:postsFetchingSuccess
    page?: number | undefined
}

interface getUsersData {
    rows: IUser[]
    count: number
}

export interface getUsers {
    users: getUsersData
    page?: number
}
export interface usersFetchingSuccess {
    users: getUsers
    isFriend: [] | number[]
}

export interface usersFetch {
    data: usersFetchingSuccess
    page: number
}

export interface commentsFetchingSuccess {
    comment: {
        Comment: string
        createdAt: string
        deviceId: number
        id: number
        updatedAt: string
        userId: number
    }
    users: {
        id: number
        email: string
        username: string
        img: string
    }
}

export interface userFetchingSuccess {
    user: IUser[]
}



