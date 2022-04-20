import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import SvgPreloader from '../UI/SvgPreloader';
import { RootState } from '../store/store';
import { useAppSelector } from '../hooks/redux';
import { fetchPost, removeNews } from '../store/reducers/ActionCreators';
import { AuthorInfo } from '../Components/AuthorInfo';
import BgBlurred from '../Components/BgBlurred';
import { NewsContent } from '../Components/NewsContent';
import { Comments } from '../Components/Comments';
import { IoLogoBitbucket } from 'react-icons/io';


const NewsDitail: FC = () => {
    const { id } = useParams()
    const history = useNavigate()
    const dispatch = useDispatch()

    const { post, isLoading, error } = useAppSelector((state: RootState) => state.postDitailReducer)

    const user = useAppSelector((state: RootState) => state.userAuthReducer)
    const authorPost = useAppSelector((state: RootState) => state.userReducer)

    useEffect(() => {
        dispatch(fetchPost(id))
        window.scrollTo(0, 0)
    }, [])

    const remove = async () => {
        await removeNews(id)
        history(`/react_redux_blog_ts`)
    }

    return (
        <>
            {isLoading ? <SvgPreloader />
                : <>
                    <BgBlurred backgroundImg={'' + post.img}
                        backgroundTitle='Make new friends' backgroundOptional='THIS IS OPTIONAL PAGE TITLE' />
                    <div className='container'>
                        <div className='newsInfoBlock'>
                            <div>
                                {user.id === authorPost.user.id && <button className='remove_post' title='Delete post' onClick={remove}>Delete <IoLogoBitbucket /></button>}
                                <NewsContent />
                                <Comments newsId={id} userId={user.id} authorPostId={authorPost.user.id} />
                            </div>
                            <AuthorInfo news={post} />
                        </div>
                    </div>
                </>}
        </>
    );
};

export default NewsDitail;