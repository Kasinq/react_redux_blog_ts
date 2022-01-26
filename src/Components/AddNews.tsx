import React, { FC, useState } from 'react';
import ModalWindow from '../UI/ModalWindow';

interface NewsProps {
    news: any
}

const AddNews: FC<NewsProps> = ({ news }) => {

    const [modal, setModal] = useState(false)
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const addPost = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        news.unshift({ id: Date.now(), title: title, body: body })
        setTitle('')
        setBody('')
        setModal(!modal)
        console.log(news)
    }

    return (
        <>
            <ModalWindow visible={modal} setVisible={setModal}>
                <form className="form">
                    <h3>Enter Title</h3>
                    <input type="text" placeholder="Enter title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <h3>Enter Comment</h3>
                    <textarea placeholder="Enter text"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    />
                    <button onClick={(e) => addPost(e)} >Add post</button>
                </form>
            </ModalWindow>
            <button className='addNewBtn' onClick={() => setModal(!modal)}>ADD NEWS</button>
        </>
    );
};

export default AddNews;