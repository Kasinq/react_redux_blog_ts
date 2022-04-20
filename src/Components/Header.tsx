import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import { Logaut } from './Logaut';
import { IoMdPerson, IoIosLogIn } from "react-icons/io";
import { IoChevronDown } from 'react-icons/io5';
import '../styles/select.scss'
import { useAppSelector } from '../hooks/redux';
import { RootState } from '../store/store';
import { fetchPosts } from '../store/reducers/ActionCreators';

const Header: FC = () => {
    const {id, email} = useAppSelector((state:RootState) => state.userAuthReducer)
    const { limit, page } = useAppSelector((state:RootState) => state.postsReducer)
    
    const router = useNavigate()
    const dispatch = useDispatch()

    const selectPosts = (sortMethod: string, userId?: number) => {
        dispatch(fetchPosts(1, limit, sortMethod,'','', id))
        router('/react_redux_blog_ts')
    }

    return (
        <header className="header">
            <div className="custom-select" >
                <NavLink to="/react_redux_blog_ts">News <IoChevronDown className='chevronDown' /></NavLink>
                <div className='select__items'>
                    <div onClick={()=> selectPosts('popular')}>Popular</div>
                    <div onClick={()=> selectPosts('new')}>New</div>
                    <div onClick={()=> selectPosts('friends', id)}>Friends</div>
                </div>
            </div>
            <NavLink to="/friends">Friends</NavLink>
            {/* <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact me</NavLink> */}
            {email
                ? <><a className='ico' onClick={() => router(`/user/${id}`)}><IoMdPerson className='IoMdPerson' /> {email}</a>
                    <Logaut /></>
                : <NavLink className='LogIn' to="/auth">Login <IoIosLogIn className='IoIosLog' /></NavLink>
            }

        </header>
    );
};

export default Header;