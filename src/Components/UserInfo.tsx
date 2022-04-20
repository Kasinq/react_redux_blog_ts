import React, { FC, useEffect, useState } from 'react'
import { IoEllipsisVerticalSharp } from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { useAppSelector } from '../hooks/redux'
import { IPost } from '../models/IPosts'
import { addUserImg, isFriends, subscribe, unSubscribe } from '../store/reducers/ActionCreators'
import { RootState } from '../store/store'
import { InputFile } from '../UI/InputFile'
import SvgPreloader from '../UI/SvgPreloader'
import { calculate } from '../utils/calculateViews'
import { UserSettings } from './UserSettings'

interface UserInfoprops {
    posts: IPost[]
}

export const UserInfo: FC<UserInfoprops> = ({posts}) => {
    const { id } = useParams()
    const dispatch = useDispatch()

    const { user, isLoading, error } = useAppSelector((state: RootState) => state.userReducer)
    const authUser = useAppSelector((state: RootState) => state.userAuthReducer)

    const [isFriend, setIsFriend] = useState(false)

    useEffect(() => {
        isFriends(authUser.id, Number(id)).then((data: boolean) => {
            setIsFriend(data)
        })
    }, [user])

    const addImg = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        const file: any = (e.target.files?.[0])
        const formData = new FormData()
        formData.append("file", file)
        formData.append("image", 'hello')
        dispatch(addUserImg(formData, authUser.id.toString()))
    }

    const [openMenu, setOpenMenu] = useState(true)

    return (
        <div className='personalInfo__body'>
            {isLoading ? <SvgPreloader />
                : <>
                    <div className='personalInfo__images' style={{ backgroundImage: `url(${user.img})` }}>
                        {authUser.id == user.id && <InputFile setImage={addImg} title='Change image' />}
                    </div>
                    <div className='user__info'>
                        <h2>{user?.username}
                            {authUser.id == user.id && <IoEllipsisVerticalSharp onClick={() => setOpenMenu(!openMenu)} size='20px' cursor='pointer' />}
                        </h2>
                        {openMenu ?
                            <>
                                <div className='account__metrics'>
                                    <div>Follovers</div>
                                    <div>Following</div>
                                    <div>Views</div>
                                    <span>{user.friend}</span>
                                    <span>{user.subscribers}</span>
                                    <span>{calculate(posts)}</span>
                                </div>
                                <div className='about_me'>
                                    <h4>About me</h4>
                                    <div>
                                        {user.about}
                                    </div>
                                </div>
                                {authUser.id !== user.id &&
                                    <>
                                        {isFriend ?
                                            <div className='functionalBtn'>
                                                <div onClick={() => dispatch(unSubscribe(authUser.id, user.id))} className='followBtn'>unfollow</div>
                                                <span>Friend</span>
                                            </div>
                                            : <div onClick={() => dispatch(subscribe(authUser.id, user.id))} className='followBtn'>follow</div>}
                                    </>
                                }</>
                            : <UserSettings user={user} setOpenMenu={setOpenMenu}/>
                        }
                    </div>
                </>
            }
        </div>
    )
}
