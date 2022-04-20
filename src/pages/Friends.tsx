import React, { FC, useEffect, useState } from 'react'
import { IoEyeOutline, IoImagesOutline, IoPersonOutline } from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import BgBlurred from '../Components/BgBlurred'
import Pagination from '../Components/Pagination'
import Search from '../Components/Search'
import { useAppSelector } from '../hooks/redux'
import { fetchUsers, subscribe, unSubscribe } from '../store/reducers/ActionCreators'
import { usersSlice } from '../store/reducers/UsersSlice'
import { RootState } from '../store/store'
import { PageTitle } from '../UI/PageTitle'
import SvgPreloader from '../UI/SvgPreloader'
import { isSigned } from '../utils/isSigned'

export const Friends: FC = () => {

  const dispatch = useDispatch()

  const { error, isFriend, isLoading, count, limit, page, users } = useAppSelector((state: RootState) => state.usersReducer)

  const { id, email } = useAppSelector((state: RootState) => state.userAuthReducer)

  const router = useNavigate()

  const [search, setSearch] = useState('')
  const [isFollow, setIsFollow] = useState(false)

  useEffect(() => {
    dispatch(fetchUsers(limit, page, id.toString(), search.toLowerCase()))
  }, [page, isFollow, search])


  const onSubscribe = (e: React.MouseEvent<HTMLButtonElement>, userId: number) => {
    e.stopPropagation()
    dispatch(subscribe(id, userId))
    setIsFollow(!isFollow)
  }

  const onUnSubscribe = (e: React.MouseEvent<HTMLButtonElement>, userId: number) => {
    e.stopPropagation()
    dispatch(unSubscribe(id, userId))
    setIsFollow(!isFollow)
  }
 
  return (<>
    <BgBlurred backgroundImg='https://themegoods-cdn-pzbycso8wng.stackpathdns.com/letsblog/demo/wp-content/uploads/2015/07/15794918936_855690cb09_b1.jpg'
      backgroundTitle='Make new friends' backgroundOptional='here you are welcome'>
      <Search setSearch={setSearch} />
    </BgBlurred>
    {isLoading ? <SvgPreloader />
      : <div className='users_page'>
        {users?.map((u: any, i: number) => {
          return <div key={i} className='users_inner' onClick={() => router(`/user/${u.id}`)}>
            <div style={{ backgroundImage: `url(${u.img})` }} className='users_item'>
              <div style={{ backgroundImage: `url(${u.img})` }}></div>
            </div>
            <div className='users_inner-info'>
              <div className='userInfo'>
                <IoImagesOutline />
                <IoPersonOutline />
                <IoEyeOutline />
                <span>{u.posts}</span>
                <span>{u.subscribers}</span>
                <span>{u.views}</span>
              </div>
              <h3>@{u.email}</h3>
              {isSigned(isFriend, u.id)
                ? <div className='subscribe'>
                  <button key={i} onClick={(e) => onUnSubscribe(e, u.id)}>unFollow</button>
                  <span>Friend</span>
                </div>
                : <button className='subscribeBtn' key={i} onClick={(e) => onSubscribe(e, u.id)}>Follow</button>
              }
            </div>
          </div>
        })}
      </div>
    }
    <Pagination selectedPage={page} type='users' limit={limit} totalCount={count} rating='new' />
  </>)
}
