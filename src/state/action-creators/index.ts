import { ActionType } from "../action-types"
import { Dispatch } from "redux"
import { Action } from "../actions/index"

export const setNews = (news: any, totalCount: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SETNEWS,
            payload: {news, totalCount}
        })
    }
}

export const setComments = (comments: any) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SETCOMMENTS,
            payload: comments
        })
    }
}

export const addNews = (news: any) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.ADDNEWS,
            payload: news
        })
    }
}

export const selectedNews = (news: any) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SELECTEDNEWS,
            payload: news
        })
    }
}

