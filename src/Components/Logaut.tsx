import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { IoIosLogOut } from "react-icons/io";
import { fetchAuthUser } from '../store/reducers/ActionCreators';

export const Logaut = () => {
    const dispatch = useDispatch()
    const router = useNavigate()

    const exit = () => {
        localStorage.setItem('token', '')
        dispatch(fetchAuthUser({}))
        router(`/auth`)
    }

  return <a onClick={exit} className='LogOut'>
      Exit<IoIosLogOut className='IoIosLogOut'/> 
  </a>
};
