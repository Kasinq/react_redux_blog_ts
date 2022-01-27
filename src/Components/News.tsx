import React, { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
 
import ModalWindow from '../UI/ModalWindow';

interface NewsProps {
    news: any
}

const News: FC<NewsProps> = ({ news }) => {

    const router = useNavigate()

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
            <div className='catalog'>
                {news.map((news: any) =>
                    <div key={news.id} onClick={() => router(`/news/${news.id}`)} >
                        <img src={require('../images/post_img.jpg')} alt="post-img" />
                        <h2 className="titlePost">{news.title}</h2>
                        <div onClick={(e) => e.stopPropagation()}>
                            <div className="datePost"><span>July 22, 2021</span></div>
                            <div className="textPost">{news.body}</div>
                        </div>
                        <button>Read More</button>
                    </div>
                )}
            </div>
        </>
    );
};

export default News;