import React, { FC } from 'react'
import { IoCloseOutline } from 'react-icons/io5'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { removeComment } from '../store/reducers/ActionCreators'
import { dateMonth } from '../utils/convertDate'

interface CommentProps {
    comment: any
    user: any
    userId: any
    authorPostId: any
    isRemove:boolean
    setIsRemove: (value:boolean)=> void
}

export const Comment:FC<CommentProps> = ({comment, user, userId, authorPostId, isRemove, setIsRemove}) => {

    const router = useNavigate()



    const remove = (commentId: number) => {
        removeComment(commentId)
        setIsRemove(!isRemove)
    }

    return (
        <div className="commentInfo">
            <div className="commentAuthor"
                onClick={() => router(`/member/${comment.userId}`)}
                style={{ backgroundImage: `url(${user.img})` }} >
            </div>
            <div className="body">
                <div className="body__inner">
                    <h3 className="email">{user.email}</h3>
                    {(userId == comment.userId || userId == authorPostId) && <span
                        className="delete-comment"
                        title="delete comment"
                        onClick={() => remove(comment.id)} ><IoCloseOutline /></span>}
                </div>
                <p className="text-comment">{comment.Comment}</p>
                <span className="date-comment">{dateMonth(comment.createdAt)}</span>
            </div>
        </div>
    )
}
