import React, { FC, useEffect, useState } from 'react';
import { IoPricetagsSharp } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { useAppSelector } from '../hooks/redux';
import { IPost } from '../models/IPosts';
import { setLike } from '../store/reducers/ActionCreators';
import { RootState } from '../store/store';
import { dateMonth } from '../utils/convertDate';
import { Tags } from './Tags';

export const NewsContent: FC = () => {
    const dispatch = useDispatch()

    const { id } = useAppSelector((state: RootState) => state.userAuthReducer)
    const { post, isLoading, error } = useAppSelector((state: RootState) => state.postDitailReducer)
    const {user} = useAppSelector((state:RootState) => state.userReducer)
    
    useEffect(() => {
        dispatch(setLike(id, post.id, post.rating, post.typeId))
    }, [])

    return <>
        <div className="post-body">
            <h1 className="post-title">
                {post.name}
            </h1>
            <div className="post-date"><span>{dateMonth(post.createdAt)}</span></div>
            <div className="longDescriptrion">
                <p>Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum dolor sit amet, consectetur Nulla fringilla purus at leo dignissim congue. Mauris elementum accumsan leo vel tempor. Sit amet cursus nisl aliquam. Aliquam et elit eu nunc rhoncus viverra quis at felis. Sed do.Lorem ipsum dolor sit amet, consectetur Nulla fringilla purus Lorem ipsum dosectetur adipisicing elit at leo dignissim congue. Mauris elementum accumsan leo vel tempor', 'Aliquam et elit eu nunc rhoncus viverra quis at felis et netus et malesuada fames ac turpis egestas. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes'</p>
            </div>
            <img src="../images/postDitail.jpg" alt="" />
            <div className="imgDescriptrion">Travelling all around the world.</div>
            <div className="longDescriptrion">
                <p>{post.description}</p>
            </div>
            <div className="phrase">
                GOOD DESIGN IS MAKING SOMETHING INTELLIGIBLE AND MEMORABLE. GREAT DESIGN IS MAKING SOMETHING MEMORABLE AND MEANINGFUL.
            </div>
            <p>Aliquam et elit eu nunc rhoncus viverra quis at felis et netus et malesuada fames ac turpis egestas. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes</p>
            {post.info?.length !== 0 && <div className='tags'><IoPricetagsSharp className='tags-icon' /> <Tags tags={post.info} /></div>}
            <hr />
        </div>
    </>
}
