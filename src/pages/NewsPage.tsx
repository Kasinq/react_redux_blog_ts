import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FetchNews } from '../api/fetchNest';
import BgBlurred from '../Components/BgBlurred';
import News from '../Components/News';
import Pagination from '../Components/Pagination';
import Search from '../Components/Search';
import { State } from '../state';
import '../styles/style.scss'
import Preloader from '../UI/Preloader';

const NewsPage = () => {
  const news = useSelector((state: State) => state.news.news)
  const dispatch = useDispatch()

  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(6)
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState('')
  // Search 
  const sortedAndSearchNews = useMemo((n = news) => {
    return n.filter((news: any) => news.title.toLowerCase().includes(search.toLowerCase().trim()))
  }, [search, news])

  useEffect(() => {
    FetchNews(dispatch, page, limit, setIsLoading)
  }, [page, limit])

  return (
    <>
      <BgBlurred>
        <Search search={search} setSearch={setSearch} setLimit={setLimit} />
      </BgBlurred>
      <div className='container'>
        {isLoading 
        ? <News news={sortedAndSearchNews} />
        : <Preloader />
        }
        <Pagination page={page} setPage={setPage} limit={limit} setIsLoading={setIsLoading} />
      </div>
    </>
  )
}

export default NewsPage;