export interface IComentator {
    id?: number
    email?: string
    username?: string
    img?: string
}

export interface IComent {
    Comment?: string
    createdAt?: string
    deviceId?: number
    id?: number
    updatedAt?: string
    userId?: number
}

export interface IComentInfo {
    comment: IComent[]
    rows: IComentator[]
}
