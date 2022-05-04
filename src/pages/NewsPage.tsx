import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import AddNews from '../Components/AddNews';
import BgBlurred from '../Components/BgBlurred';
import { InstagramGetPosts } from '../Components/InstagramGetPosts';
import { NewsItem } from '../Components/NewsItem';
import Pagination from '../Components/Pagination';
import Search from '../Components/Search';
import { useAppSelector } from '../hooks/redux';
import { fetchPosts } from '../store/reducers/ActionCreators';
import { RootState } from '../store/store';
import '../styles/style.scss'
import SvgPreloader from '../UI/SvgPreloader';

const NewsPage = () => {
  const { posts, isLoading, limit, page, rating, userId, totalCount, error } = useAppSelector((state:RootState) => state.postsReducer)

  const dispatch = useDispatch()

  const {id} = useAppSelector((state:RootState) => state.userAuthReducer)

  const [search, setSearch] = useState('')
  const { title } = useParams()

  useEffect(() => {
    dispatch(fetchPosts(page, limit, rating, search.toLowerCase(), title, id))
  }, [page, limit, rating, userId, search, title])

  return <>
    <BgBlurred backgroundTitle='Latest news' backgroundOptional='THIS IS OPTIONAL PAGE TITLE' height='30%'>
      <Search setSearch={setSearch} />
    </BgBlurred>
    {isLoading ? <SvgPreloader />
      :
      <div className='container'>
        <AddNews />
        <NewsItem posts={posts} />
      </div>
    }
    <Pagination selectedPage={page} type='posts' limit={limit} totalCount={totalCount} rating={rating} />
  </>
}

export default NewsPage;