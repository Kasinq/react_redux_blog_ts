export interface IPost {
    brandId?: number
    createdAt?: string
    description?: string
    id?: number
    img?: string | null
    info?: ITegs[]
    name?: string
    rating?: number
    typeId?: number
    updatedAt?: string
}

export interface IPosts {
    count: number
    rows: IPost[]
}

export interface ITegs {
    createdAt: string
    description: string
    deviceId: number
    id: number
    title: string
    updatedAt: string
}