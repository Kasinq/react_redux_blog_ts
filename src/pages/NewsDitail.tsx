import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { FetchNewsDitail } from '../api/fetchNest';
import { AuthorInfo } from '../Components/AuthorInfo';
import BgBlurred from '../Components/BgBlurred';
import { Comments } from '../Components/Comments';
import { NewsContent } from '../Components/NewsContent';
import { State } from '../state';
import Preloader from '../UI/Preloader';

const NewsDitail = () => {
    const newsId = useParams()
    const dispatch = useDispatch()
    const news = useSelector((state: State) => state.newsDitail.news)
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (newsId.id && newsId.id !== '') {
            FetchNewsDitail(dispatch, +newsId.id, setIsLoading)
        }
    }, [newsId.id])

    return (
        <>
            <BgBlurred />
            <div className='container'>
                {isLoading
                    ? <>
                        <div className='newsInfoBlock'>
                            <div>
                                <NewsContent news={news} />
                                <Comments newsId={newsId.id} />
                            </div>
                            <AuthorInfo />
                        </div>
                    </>
                    : <Preloader />
                }
            </div>
        </>
    );
};

export default NewsDitail;