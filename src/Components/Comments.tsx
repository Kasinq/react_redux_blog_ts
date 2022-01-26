import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchComments } from '../api/fetchNest';
import { State } from '../state';
import { AddComment } from './AddComment';

interface CommentsProps {
    newsId: any
}

export const Comments: FC<CommentsProps> = ({ newsId }) => {

    const dispatch = useDispatch()
    const comments = useSelector((state: State) => state.newsComments.comments)
    const [isLoaging, setIsLoaging] = useState(false);
    const [showComments, setshowComments] = useState(false);

    useEffect(() => {
        fetchComments(dispatch, +newsId, setIsLoaging)
    }, [])

    const commentText = (comment: any) => {
        return <div className="commentInfo" key={comment.id}>
            <img className="commentAuthor" src="https://cdn.quotesgram.com/img/54/43/246061852-rust_sq-bbaf9ee9f99a9d4391c4979ca94a3fb4835a3b49.jpg" alt="" />
            <div className="body">
                <h3 className="email">{comment.email}</h3>
                <p className="text-comment">{comment.body}</p>
            </div>
        </div>
    }
    
    return (
        <>
            {
                comments.map((comment: any, i: number) =>
                    showComments && comments
                        ? commentText(comment)
                        : (i === comments.length - 1) && commentText(comment)
                )
            }
            <div className='showComments' onClick={() => setshowComments(!showComments)}>{showComments ? 'Hide comments' : 'All comments'}</div>
            <hr/>
            <AddComment postId={newsId} />
        </>
    )
}
