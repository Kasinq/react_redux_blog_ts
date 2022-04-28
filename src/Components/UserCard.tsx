import React, { FC, useEffect, useState } from 'react'
import { IoEyeOutline, IoImagesOutline, IoPersonOutline } from 'react-icons/io5'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { IUserCard } from '../models/IUser'
import { isFriends, subscribe, unSubscribe } from '../store/reducers/ActionCreators'

interface UserCardProps {
    user: IUserCard,
    authUserId: number,
}

export const UserCard: FC<UserCardProps> = ({ user, authUserId }) => {
    const dispatch = useDispatch()
    const router = useNavigate()

    const [isFriend, setIsFriend] = useState(false)
    const [subscribers, setSubscribers] = useState(user.subscribers)

    const onSubscribe = (e: React.MouseEvent<HTMLButtonElement>, userId: number) => {
        e.stopPropagation()
        dispatch(subscribe(authUserId, userId))
        setIsFriend(true)
        setSubscribers(subscribers + 1)
    }

    const onUnSubscribe = (e: React.MouseEvent<HTMLButtonElement>, userId: number) => {
        e.stopPropagation()
        dispatch(unSubscribe(authUserId, userId))
        setIsFriend(false)
        setSubscribers(subscribers - 1)
    }

    useEffect(() => {
        isFriends(authUserId, Number(user.id)).then((data: boolean) => {
            setIsFriend(data)
        })
    }, [])

    return (
        <div className='users_inner' onClick={() => router(`/user/${user.id}`)} >
            <div style={{ backgroundImage: `url(${user.img})` }} className='users_item'>
                <div style={{ backgroundImage: `url(${user.img})` }}></div>
            </div>
            <div className='users_inner-info'>
                <div className='userInfo'>
                    <IoImagesOutline />
                    <IoPersonOutline />
                    <IoEyeOutline />
                    <span>{user.posts}</span>
                    <span>{subscribers}</span>
                    <span>{user.views}</span>
                </div>
                <h3>@{user.email}</h3>
                {isFriend ? <div className='subscribe'>
                    <button onClick={(e) => onUnSubscribe(e, user.id)}>unFollow</button>
                    <span>Friend</span>
                </div>
                    : <>{authUserId ?
                        <button className='subscribeBtn'
                            onClick={(e) => onSubscribe(e, user.id)}>Follow</button>
                        : <button className='subscribeBtn'>Show</button>
                    }</>
                }
            </div>
        </div>
    )
}
