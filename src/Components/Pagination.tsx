import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { State } from "../state";

interface PaginationProps {
    page: number 
    setPage: (value: number) => void
    limit: number
    setIsLoading: (value: boolean) => void
}
 
const Pagination: FC<PaginationProps> = ({ page, setPage, limit, setIsLoading }) => {

    const totalCount = useSelector((state: State) => state.news.totalCount)

    let pages = totalCount / limit
    let res = []

    for (let i = 0; i < pages; i++) {
        res.push(i + 1)
    }

    const onPage = (page: number) => {
        setIsLoading(false)
        setPage(page)
    }

    return (
        <div className='pages'>
            {
                res.map((p: number) =>
                    p === page 
                    ? <span style={{color:'rgb(190, 172, 9)'}} key={p} >{p}</span>
                    : <span onClick={()=> onPage(p)} key={p} >{p}</span>)
            }
        </div>
    );
};

export default Pagination;