import axios from "axios";
import jwtDecode from "jwt-decode";
import { commentsFetchingSuccess, getUsers, postsFetchingSuccess, usersFetch, usersFetchingSuccess } from "../../models/IActions";
import { userFetchingSuccess } from "../../models/IActions";
import { IPost } from "../../models/IPosts";

import { AppDispatch } from "../store";
import { commentsSlice } from "./CommentsSlice";
import { postDitailSlice } from "./PostDitailSlice";
import { postsSlice } from "./PostsSlice";
import { userSlice } from "./UserSlice";
import { usersSlice } from "./UsersSlice";
import { userAuthSlice } from './UserAuthSlice'
import { IAuthUser, IToken, IUser } from "../../models/IUser";
import { IComentInfo } from "../../models/IComentator";
import UsersPostsSlice, { usersPostsSlice } from "./UsersPostsSlice";
import { IChangeProfile } from "../../models/IChangeProfile";

export const fetchUsers = (limit: number, page: number, userId: number, searchTerm?: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(usersSlice.actions.usersFetching())
        const { data } = await axios.get<getUsers>(`https://stark-oasis-40782.herokuapp.com/api/user`, {
            params: {
                limit: limit,
                page: page,
                userId: userId,
                searchTerm: searchTerm,
            }
        })
        dispatch(usersSlice.actions.usersFetchingSuccess(data))
    } catch (error: any) {

    }
}

export const fetchUser = (id: string | undefined) => async (dispatch: AppDispatch) => {
    try {
        dispatch(userSlice.actions.userFetching())
        const { data } = await axios.get<IUser>(`https://stark-oasis-40782.herokuapp.com/api/user/${id}`)
        dispatch(userSlice.actions.userFetchingSuccess(data))
    } catch (error: any) {
        dispatch(userSlice.actions.userFetchingError(error.message))
    }
}

export const fetchAuthUser = (data: any) => async (dispatch: AppDispatch) => {
    try {
        dispatch(userAuthSlice.actions.userAuthFetching())
        dispatch(userAuthSlice.actions.userAuthFetchingSuccess(data))
    } catch (error: any) {
        dispatch(userAuthSlice.actions.userAuthFetchingError(error.message))
    }
}

export const fetchPost = (userId: string | undefined) => async (dispatch: AppDispatch) => {
    try {
        dispatch(postDitailSlice.actions.postDitailFetching())
        const { data } = await axios.get<IPost>(`https://stark-oasis-40782.herokuapp.com/api/device/${userId}`)
        dispatch(postDitailSlice.actions.postDitailFetchingSuccess(data))
    } catch (error: any) {
        dispatch(postDitailSlice.actions.postDitailFetchingError(error.message))
    }
}

export const fetchPosts = (page: number | undefined, limit: number, rating?: string, searchTerm?: string, tag?: string, userId?: number | string) =>
    async (dispatch: AppDispatch) => {
        try {
            dispatch(postsSlice.actions.postsFetching())
            const { data } = await axios.get('https://stark-oasis-40782.herokuapp.com/api/device', {
                params: {
                    limit: limit,
                    page: page,
                    rating: rating,
                    userId: userId,
                    searchTerm: searchTerm,
                    tag: tag,
                }
            })
            const res = { data, page }
            dispatch(postsSlice.actions.postsFetchingSuccess(res))
        } catch (error: any) {
            dispatch(postsSlice.actions.postsFetchingError(error.message))
        }
    }

export const getUserPosts = (page: number, limit: number, userId: number) =>
    async (dispatch: AppDispatch) => {
        try {
            dispatch(usersPostsSlice.actions.usersPostsFetching())
            const { data } = await axios.get<postsFetchingSuccess>(`https://stark-oasis-40782.herokuapp.com/api/device/userposts/${userId}`, {
                params: {
                    limit: limit,
                    page: page,
                }
            })
            dispatch(usersPostsSlice.actions.usersPostsFetchingSuccess(data))
        } catch (error: any) {
            dispatch(usersPostsSlice.actions.usersPostsFetchingError(error.message))
        }
    }

export const createPost = (file: any) => async (dispatch: AppDispatch) => {
    try {
        dispatch(postsSlice.actions.postsFetching())
        const { data } = await axios.post(`https://stark-oasis-40782.herokuapp.com/upload`, file)
        dispatch(postsSlice.actions.postsFetchingSuccess({ data }))
    } catch (e: any) {
        dispatch(postsSlice.actions.postsFetchingError(e.message))
    }
}

export const addUserImg = (file: any, id: string) =>
    async (dispatch: AppDispatch) => {
        try {
            dispatch(userSlice.actions.userFetching())
            const { data } = await axios.post(`https://stark-oasis-40782.herokuapp.com/upload/${id}`, file)
            dispatch(userSlice.actions.userFetchingSuccess(data))
        } catch (error: any) {
            dispatch(userSlice.actions.userFetchingError(error.message))
        }
    }


export const fetchComments = (postId: string | undefined) => async (dispatch: AppDispatch) => {
    try {
        dispatch(commentsSlice.actions.commentsFetching())
        const { data } = await axios.get<IComentInfo>(`https://stark-oasis-40782.herokuapp.com/api/device/${postId}/comments`)
        dispatch(commentsSlice.actions.commentsFetchingSuccess(data))
    } catch (e: any) {
        dispatch(commentsSlice.actions.commentsFetchingError(e.message))
    }
}

export const createComments = (postId: string | number, comment: string, userId: string | undefined) => async (dispatch: AppDispatch) => {
    try {
        dispatch(commentsSlice.actions.commentsFetching())
        const { data } = await axios.post<IComentInfo>(`https://stark-oasis-40782.herokuapp.com/api/device/${postId}/comment`, { postId, comment, userId })
        dispatch(commentsSlice.actions.commentsFetchingSuccess(data))
    } catch (e: any) {
        dispatch(commentsSlice.actions.commentsFetchingError(e.message))
    }
}

export const removeComment = async (commentId: number) => {
    await axios.get(`https://stark-oasis-40782.herokuapp.com/api/device/remove/comment/${commentId}`)
    return
}

export const isFriends = async (userId: number = 2, friendsId: number) => {
    const { data } = await axios.post('https://stark-oasis-40782.herokuapp.com/api/user/isfriends', { friendsId, userId })
    return data
}

export const subscribe = (userId: number, friendsId: number | undefined) => async (dispatch: AppDispatch) => {
    try {
        dispatch(userSlice.actions.userFetching())
        const { data } = await axios.post<IUser>('https://stark-oasis-40782.herokuapp.com/api/user/subscribe', { friendsId, userId })
        dispatch(userSlice.actions.userFetchingSuccess(data))
    } catch (error: any) {
        dispatch(userSlice.actions.userFetchingError(error.message))
    }
}
export const unSubscribe = (userId: number, friendsId: number | undefined) => async (dispatch: AppDispatch) => {
    try {
        dispatch(userSlice.actions.userFetching())
        const { data } = await axios.post<IUser>('https://stark-oasis-40782.herokuapp.com/api/user/unsubscribe', { friendsId, userId })
        dispatch(userSlice.actions.userFetchingSuccess(data))
    } catch (error: any) {
        dispatch(userSlice.actions.userFetchingError(error.message))
    }
}

export const addUserName = (id: string | undefined, changeProfileInfo: IChangeProfile) =>
    async (dispatch: AppDispatch) => {
        try {
            console.log(changeProfileInfo)
            dispatch(userSlice.actions.userFetching())
            const { data } = await axios.post<IUser>(`https://stark-oasis-40782.herokuapp.com/api/user/${id}/update`, { changeProfileInfo, id })
            dispatch(userSlice.actions.userFetchingSuccess(data))
        } catch (error: any) {
            dispatch(userSlice.actions.userFetchingError(error.message))
        }
    }

export const registration = async (email: string, password: string, username: string) => {
    const { data } = await axios.post(`https://stark-oasis-40782.herokuapp.com/api/user/registration`, { email, password, role: 'ADMIN', username })
    localStorage.setItem('token', data.token)
    const res: IAuthUser = jwtDecode(data.token)
    return res
}

export const login = async (email: string, password: string) => {
    const { data } = await axios.post<IToken>(`https://stark-oasis-40782.herokuapp.com/api/user/login`, { email, password })
    localStorage.setItem('token', data.token)
    const res: IAuthUser = jwtDecode(data.token)
    return res
}

export const check = async () => {
    const { data }: any = await axios.get(`https://stark-oasis-40782.herokuapp.com/api/user/auth`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    }).catch((e: any) => console.log(e.response.data.message))
    return jwtDecode(data.token)
}

export const removeNews = async (userId: string | undefined) => {
    await axios.get(`https://stark-oasis-40782.herokuapp.com/api/device/remove/${userId}`)
    return
}

export const setLike = (userId: number, postId?: number, rating?: number, userPostId?: number) =>
    async (dispatch: AppDispatch) => {
        await axios.post(`https://stark-oasis-40782.herokuapp.com/api/device/${postId}/view`, { rating, userId, userPostId })
    }

export const getUsersNews = (limit: number, page: number, userid: string | undefined) =>
    async (dispatch: AppDispatch) => {
        try {
            dispatch(postsSlice.actions.postsFetching())
            const { data } = await axios.get<postsFetchingSuccess>(`https://stark-oasis-40782.herokuapp.com/api/device/userposts/${userid}`, {
                params: {
                    limit: limit,
                    page: page
                }
            })
            const res = { data, page }
            dispatch(postsSlice.actions.postsFetchingSuccess(res))
        } catch (error: any) {
            dispatch(postsSlice.actions.postsFetchingError(error.message))
        }
    }