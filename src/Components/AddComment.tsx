import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { State } from '../state';

interface AddCommentProps {
    postId: string | number
}

export const AddComment: FC<AddCommentProps> = ({ postId }) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [comment, setComment] = useState('')

    const comments = useSelector((state: State) => state.newsComments.comments)

    const addComment = (e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if (comment && email)
            comments.push({ postId: postId, id: Date.now(), name: name, email: email, body: comment })
        else alert("Поля відмічені '*' обов'язкові до заповнення")
        setName('')
        setEmail('')
        setComment('')
    }

    return <div className="leaveComment">
        <div className="headerText" >
            <span>Leave a Comment</span>
        </div>
        <div className="desc">Your email address will not be published. Required fields are marked *</div >
        <form>
            <span>Comment</span>
            <textarea
                onChange={(e) => setComment(e.target.value)}
                value={comment}
            />
            <div className="comentatorInfo">
                <div>
                    <span>Name*</span>
                    <input
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        placeholder="Name*"
                        type="text" />
                </div>
                <div>
                    <span>Email*</span>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        placeholder="Email*"
                        type="text" />
                </div>
                <div className="webSite">
                    <span>Website</span>
                    <input placeholder="Website" type="text" />
                </div>
            </div>
            <button onClick={(e) => addComment(e)} className="leave-comment">Post Comment</button>
        </form>
    </div>
}
