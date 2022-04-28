import React, { FC, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import BgBlurred from '../Components/BgBlurred'
import Pagination from '../Components/Pagination'
import Search from '../Components/Search'
import { UserCard } from '../Components/UserCard'
import { useAppSelector } from '../hooks/redux'
import { fetchUsers } from '../store/reducers/ActionCreators'
import { RootState } from '../store/store'
import SvgPreloader from '../UI/SvgPreloader'

export const Friends: FC = () => {
  const dispatch = useDispatch()

  const { isLoading, count, limit, page, users } = useAppSelector((state: RootState) => state.usersReducer)
  const { id } = useAppSelector((state: RootState) => state.userAuthReducer)

  const [search, setSearch] = useState('')

  useEffect(() => {
    dispatch(fetchUsers(limit, page, id, search.toLowerCase()))
  }, [search, id])

  return (<>
    <BgBlurred backgroundImg='https://themegoods-cdn-pzbycso8wng.stackpathdns.com/letsblog/demo/wp-content/uploads/2015/07/15794918936_855690cb09_b1.jpg'
      backgroundTitle='Make new friends' backgroundOptional='here you are welcome' height='30%'>
      <Search setSearch={setSearch} />
    </BgBlurred>
    {isLoading ? <SvgPreloader />
      : <div className='users_page'>
        {users.map((user: any, i: number) => {
          return <UserCard key={i} user={user} authUserId={id} />
        })}
      </div>
    }
    <Pagination selectedPage={page} type='users' limit={limit} totalCount={count} rating='new' />
  </>)
}
