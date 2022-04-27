import React, { FC, useEffect, useState } from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { useAppSelector } from '../hooks/redux';
import { IComent, IComentator } from '../models/IComentator';
import { fetchComments } from '../store/reducers/ActionCreators';
import { RootState } from '../store/store';
import { Comment } from '../UI/Comment';
import SvgPreloader from '../UI/SvgPreloader';
import { dateMonth } from '../utils/convertDate';
import { lastComment } from '../utils/lastComment';

import { AddComment } from './AddComment';

interface CommentsProps {
    newsId: any
    userId: number
    authorPostId: number | undefined
}

export const Comments: FC<CommentsProps> = ({ newsId, userId, authorPostId }) => {

    const { isLoading, comments, users, error } = useAppSelector((state: RootState) => state.commentsReducer)
    const dispatch = useDispatch()
    const [showComments, setshowComments] = useState(false)

    const [isRemove, setIsRemove] = useState(false)

    useEffect(() => {
        dispatch(fetchComments(newsId))
    }, [isRemove])

    return (
        <>
            <div className='comments'>
                {isLoading
                    ? <SvgPreloader />
                    : lastComment(comments, showComments).map((comment: IComent) => {
                        return <div key={comment.id} >
                            {users.map((user: IComentator) => {
                                if (comment.userId == user.id) 
                                return <Comment key={user.id} comment={comment} user={user} userId={userId} authorPostId={authorPostId}
                                isRemove={isRemove} setIsRemove={setIsRemove} />
                            })
                            }
                        </div>
                    })
                }
                <div className='showComments' onClick={() => setshowComments(!showComments)}>
                    {showComments ? 'Hide comments' : 'All comments'}
                </div>
                <hr />
                <AddComment postId={newsId} />
            </div>

        </>
    )
}
