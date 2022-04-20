import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../styles/style.scss'
import '../styles/inputFileStyle.scss'
import { PageTitle } from '../UI/PageTitle';
import { NewsItem } from '../Components/NewsItem';
import { UserInfo } from '../Components/UserInfo';
import { useParams } from 'react-router';
import { fetchPosts, fetchUser, fetchUsers, getUserPosts } from '../store/reducers/ActionCreators';
import { useAppSelector } from '../hooks/redux';
import { RootState } from '../store/store';

export const User: FC = () => {

  const dispatch = useDispatch()
  const { id } = useParams()
  const { posts } = useAppSelector((state: RootState) => state.usersPostsSlice)

  useEffect(() => {
    dispatch(fetchUser(id))
    dispatch(getUserPosts(1, 6, Number(id)))
    dispatch(fetchUsers(6, 1, id))
  }, [id])

  return <div className='personalInfo'>
    <UserInfo posts={posts} />
    {Object.keys(posts).length !== 0 &&
      <>
        <PageTitle title='Posts' />
        <NewsItem posts={posts} />
      </>
    }

  </div>
}
