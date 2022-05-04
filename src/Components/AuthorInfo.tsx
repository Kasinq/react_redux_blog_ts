import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { useAppSelector } from '../hooks/redux';
import { IPost } from '../models/IPosts';
import { fetchUser } from '../store/reducers/ActionCreators';
import { RootState } from '../store/store';
import { SocialItems } from './SocialItems';
import { SubscriptionForm } from './SubscriptionForm';

interface AuthorInfoProps {
    news: IPost
}

export const AuthorInfo: FC<AuthorInfoProps> = ({ news }) => {
    const dispatch = useDispatch()
    const router = useNavigate()

    const {user} = useAppSelector((state:RootState) => state.userReducer)

    useEffect(() => {
        dispatch(fetchUser(news.typeId?.toString()))
    }, [])

    return (
        <div className='authorInfo'>
            <div className="about-me" onClick={() => router(`/user/${user.id}`)}>
                <div>Author</div>
                <img className="avatar" src={`${user.img}`} alt="" />
                <div className="authorSign" >{user.username}</div>
            </div>
            <div className="subscription">
                <SubscriptionForm />
            </div>
            <div className="about-me follow-me">
                <div>FOLLOW ME ON</div>
                <SocialItems />
            </div>
        </div>
    )
}
