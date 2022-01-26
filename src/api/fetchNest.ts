import axios from "axios"
import { selectedNews, setComments, setNews } from "../state/action-creators"

export const FetchNews = async (dispatch: any, page: number, limit: number, setIsLoading: (value: boolean) => void) => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
        params: {
            _limit: limit,
            _page: page
        }
    })
    const totalCount = response.headers['x-total-count']
    
    dispatch(setNews(response.data, +totalCount))

    setIsLoading(true)
}

export const FetchNewsDitail = async (dispatch: any, userId: number, setIsLoading: (value: boolean) => void) => {
    const response: any = await axios.get(`https://jsonplaceholder.typicode.com/posts/${userId}`).catch((err) => {
        console.log('Err', err)
    })
    dispatch(selectedNews(response.data))

    setIsLoading(true)
}

export const fetchComments = async (dispatch: any, userId: number, setIsLoading: (value: boolean) => void ) => {
    const response: any = await axios.get(`https://jsonplaceholder.typicode.com/posts/${userId}/comments`).catch((err) => {
        console.log('Err', err)
    })
    dispatch(setComments(response.data))
    setIsLoading(true)
}