import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { IAuthUser } from '../models/IUser'
import { fetchAuthUser, login } from '../store/reducers/ActionCreators'
import { AuthForm } from '../UI/AuthForm'

export const Authorisation = () => {

    const history = useNavigate()
    const dispatch = useDispatch()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const authorizate = async () => {
        try {
            const data:IAuthUser = await login(email, password)

            dispatch(fetchAuthUser(data))
            history(`/react_redux_blog_ts`)
        } catch (e: any) {
            setError(e.response.data.message)
        }

    }

    return (
        <AuthForm title='Login'>
            <span className='error' >{error}</span>
            <input type="text" placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input type="password" placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={authorizate}>Sign in</button>
        </AuthForm>
    )
}
