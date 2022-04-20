import axios from "axios"

export const getPosts = async (page: number | undefined, limit: number, rating: string, setPosts: (value:any)=>void ) => {
    const { data } = await axios.get('https://stark-oasis-40782.herokuapp.com/api/device', {
        params: {
            limit: limit,
            page: page,
            rating: rating,
        }
    })    
    setPosts(data.rows)
    return data
}