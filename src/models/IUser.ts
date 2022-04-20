export interface IAuthUser {
        id: number
        email: string
        exp: number
        iat: number
        role: string
}

export interface IToken {
    token: string
}

export interface IUser {
    email?: string
    friend?: number
    id?: number
    img?: string
    posts?: number
    subscribers?: number
    views?: number
    instagram?: string
    about?: string
    createdAt?: string
    username?: string
}

export interface IUsers {
    count: number
    rows: IUser[]
}

export interface IAllUsers {
    isFriend: number[]
    users: IUsers
}

export interface IGetUsers {
    users: IUser[]
    count: number
    isFriend: [] | number[],
    page?: number
}

