import axios from "axios"

export const googleLogin = async () => {
    const res = await axios.get('https://stark-oasis-40782.herokuapp.com/auth/google')
}