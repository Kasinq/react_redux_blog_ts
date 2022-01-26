import { ActionType } from "../action-types"
import { Action } from "../actions"

const initialState = {
    comments: []
}

export const comments = (state: any = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.SETCOMMENTS:
            return {
                ...state,
                comments: action.payload
            }
        default:
            return state
    }
}