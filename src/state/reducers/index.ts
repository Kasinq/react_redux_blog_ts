import { combineReducers } from "redux";
import { reducer, selectedNews } from './bankReducer'
import { comments } from "./commentsReducer";

const reducers = combineReducers({
    news: reducer,
    newsDitail: selectedNews,
    newsComments: comments
})

export default reducers
export type State = ReturnType<typeof reducers>