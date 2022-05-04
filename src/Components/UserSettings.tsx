import React, { FC, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import { addUserName } from '../store/reducers/ActionCreators'
import { SocialItems } from './SocialItems'

interface UserSettingsProps {
    user: any
    setOpenMenu: (value: boolean) => void
}

export const UserSettings: FC<UserSettingsProps> = ({ user, setOpenMenu }) => {

    const dispatch = useDispatch()
    const { id } = useParams()

    const [email, setEmail] = useState(user.email)
    const [userName, setUserName] = useState(user.username)
    const [about, setAbout] = useState(user.about || '')
    const [facebook, setFacebook] = useState(user.facebook || '')
    const [instagram, setInstagram] = useState(user.instagram || '')
    const [pinterest, setPinterest] = useState(user.pinterest || '')
    const [twiter, setTwiter] = useState(user.twiter || '')

    const data = {
        email,
        userName,
        about,
        facebook,
        instagram,
        pinterest,
        twiter,
    }

    const changeInfo = () => {
        dispatch(addUserName(id, data))
        setOpenMenu(true)
    }

    return (
        <div className='contactInfo'>
            <div>Email<input type="text"
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}
            /></div>
            <div>User Name<input type="text"
                value={userName}
                onChange={(e) => setUserName(e.currentTarget.value)}
            /></div>

            <div>Facebook<input type="text"
                value={facebook}
                onChange={(e) => setFacebook(e.currentTarget.value)}
            /></div>
            <div>Instagram<input type="text"
                value={instagram}
                onChange={(e) => setInstagram(e.currentTarget.value)}
            /></div>
            <div>Pinterest<input type="text"
                value={pinterest}
                onChange={(e) => setPinterest(e.currentTarget.value)}
            /></div>
            <div>Twiter<input type="text"
                value={twiter}
                onChange={(e) => setTwiter(e.currentTarget.value)}
            /></div>
            <div className='contactInfo__aboutMe'>
                <span>About Me</span><textarea
                    value={about}
                    onChange={(e) => setAbout(e.currentTarget.value)} />
            </div>
            <button onClick={() => changeInfo()}>Save Changes</button>
        </div>
    )
}
