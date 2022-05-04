import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { googleLogin } from '../api/fetchUser'
import { IAuthUser } from '../models/IUser'
import { fetchAuthUser, registration } from '../store/reducers/ActionCreators'
import { AuthForm } from '../UI/AuthForm'
import { FaGoogle } from 'react-icons/fa';

export const Registration = () => {

    const history = useNavigate()
    const dispatch = useDispatch()

    const [email, setEmail] = useState('')
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const registrate = async () => {
        try {
            const data: IAuthUser = await registration(email, password, userName)
            history(`/react_redux_blog_ts`)
            dispatch(fetchAuthUser(data))
        } catch (e: any) {
            setError(e.response.data.message)
        }
    }

    return (
        <AuthForm title='Registration' style='login2'>
            <span className='error' >{error}</span>
            <input type="text" placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input type="text" placeholder='UserName'
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
            />
            <input type="password" placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <div className='social_btn'>
                <a href='https://stark-oasis-40782.herokuapp.com/auth/google'><FaGoogle className='google' title='Google' size="22px" /></a>
            </div>
            <button onClick={registrate}>Registration</button>
        </AuthForm>
    )
}
