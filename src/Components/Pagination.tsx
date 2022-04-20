import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAppSelector } from '../hooks/redux';
import { fetchPosts, fetchUsers } from '../store/reducers/ActionCreators';
import { RootState } from '../store/store';
import { pageCounts } from '../utils/pageCounts';

interface PaginationProps {
    limit: number
    selectedPage: number
    totalCount: number
    type: string
    rating: string
}

const Pagination: FC<PaginationProps> = ({ selectedPage, limit, totalCount, type, rating }) => {

    const {id} = useAppSelector((state:RootState) => state.userAuthReducer)
    
    const dispatch = useDispatch()

    const onPage = (page: number) => {
        if (type === 'users') dispatch(fetchUsers(6, page, id.toString()))
        if (type === 'posts') dispatch(fetchPosts(page, limit, rating, '', '', id))
    }

    return (
        <div className='pages'>
            {pageCounts(totalCount, limit).map((page: number) =>
                page === selectedPage
                    ? <span style={{ color: 'rgb(190, 172, 9)' }} key={page} >{page}</span>
                    : <span onClick={() => onPage(page)} key={page} >{page}</span>)
            }
        </div>
    );
};

export default Pagination;