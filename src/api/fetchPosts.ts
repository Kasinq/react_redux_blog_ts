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

export const instagramAuth = async () => {
    const { data } = await axios.get('https://api.instagram.com/oauth/authorize?client_id={397318858688715} &redirect_uri={http://localhost:3000/react_redux_blog_ts}&scope=user_profile,user_media&response_type=code')
}