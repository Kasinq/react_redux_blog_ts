import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAppSelector } from '../hooks/redux';
import { createComments, fetchComments } from '../store/reducers/ActionCreators';
import { RootState } from '../store/store';

interface AddCommentProps {
    postId: string | number
}

export const AddComment: FC<AddCommentProps> = ({ postId }) => {

    const dispatch = useDispatch()

    const [comment, setComm] = useState('')
    const { id } = useAppSelector((state: RootState) => state.userAuthReducer)

    const [text, setText] = useState(0)


    const addComment = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        dispatch(createComments(postId, comment, id.toString()))
        setComm('')
    }

    return <div className="leaveComment">
        <div className="headerText" >
            <span>Leave a Comment</span>
        </div>
        <div className="desc">Your email address will not be published. Required fields are marked *</div >
        <form>
            <span>Comment</span>
            <div className='comment__area'>
                <textarea
                    onChange={(e) => setComm(e.target.value)}
                    maxLength={250}
                    value={comment}
                    onKeyUp={() => setText(comment.length)}
                />
            </div>
            <div className='comment__footer'>
                <button onClick={(e) => addComment(e)} className="leave-comment">Post Comment</button>
                <span>{text} / 250</span>
            </div>
        </form>
    </div>
}
