import React, { FC, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import { addUserName } from '../store/reducers/ActionCreators'

interface UserSettingsProps {
    user: any
    setOpenMenu: (value:boolean)=> void
}

export const UserSettings: FC<UserSettingsProps> = ({ user, setOpenMenu }) => {

    const dispatch = useDispatch()
    const {id} = useParams()

    const [email, setEmail] = useState(user.email)
    const [userName, setUserName] = useState(user.username)
    const [about, setAbout] = useState(user.about || '')

    const changeInfo = () => {
        dispatch(addUserName(id, userName, email, about))
        setOpenMenu(true)
    }

    return (<>
        <h4 className='contact__title' >Contact Info</h4>
        <div className='contactInfo'>
            <div><span>Email</span><input type="text"
                value={email}
                onChange={(e)=>setEmail(e.currentTarget.value)}
            /></div>
            <div><span>User Name</span><input type="text"
                value={userName}
                onChange={(e)=>setUserName(e.currentTarget.value)}
            /></div>
            <div className='contactInfo__aboutMe'><span>About Me</span><textarea 
            value={about}
            onChange={(e)=>setAbout(e.currentTarget.value)}
            /></div>
            <button onClick={()=>changeInfo()}>Save Changes</button>
        </div>
    </>)
}
