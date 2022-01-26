import { ActionType } from "../action-types"
import { Action } from "../actions"

const initialState = {
    news: [],
    totalCount: null,
    background: { 
        images:['../images/post_bg_2.jpg', `url('../images/post_bg.jpg')`],
        text:['PAGE BACKGROUND HEADER', 'THIS IS OPTIONAL PAGE TITLE']
    },
    textContent: {
        postText: ['Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum dolor sit amet, consectetur Nulla fringilla purus at leo dignissim congue. Mauris elementum accumsan leo vel tempor. Sit amet cursus nisl aliquam. Aliquam et elit eu nunc rhoncus viverra quis at felis. Sed do.Lorem ipsum dolor sit amet, consectetur Nulla fringilla purus Lorem ipsum dosectetur adipisicing elit at leo dignissim congue. Mauris elementum accumsan leo vel tempor', 'Aliquam et elit eu nunc rhoncus viverra quis at felis et netus et malesuada fames ac turpis egestas. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes'],
        imageDescription: 'Travelling all around the world.',
        phraseText: 'GOOD DESIGN IS MAKING SOMETHING INTELLIGIBLE AND MEMORABLE. GREAT DESIGN IS MAKING SOMETHING MEMORABLE AND MEANINGFUL.',
        finalText: 'Aliquam et elit eu nunc rhoncus viverra quis at felis et netus et malesuada fames ac turpis egestas. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes'
    }
}

export const reducer = (state: any = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.SETNEWS:
            return {
                ...state,
                news: action.payload.news,
                totalCount: action.payload.totalCount
            }
        case ActionType.ADDNEWS:
            return {
                ...state,
                news: action.payload
            }
        default:
            return state
    }
}

export const selectedNews = (state: any = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.SELECTEDNEWS:
            return {
                ...state,
                news: action.payload
            }
        default:
            return state
    }
}

