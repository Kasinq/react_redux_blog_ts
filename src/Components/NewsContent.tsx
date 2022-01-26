import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { State } from '../state';
  
interface NewsContentProps {
    news: any
}
 
export const NewsContent: FC <NewsContentProps> = ({news}) => {

    const textContent = useSelector((state: State) => state.news.textContent)
   
    return <>
        <div className="post-body">
            <h1 className="post-title">
                {news.title}
                {/* <IcoMenu /> */}
            </h1>
            <div className="post-date"><span>July 22, 2021</span></div>
            <div className="longDescriptrion">
                <p>{textContent.postText[0]}</p>
                <p>{textContent.postText[1]}</p>
            </div>
            <img src="../images/postDitail.jpg" alt="" />
            <div className="imgDescriptrion">{textContent.imageDescription}</div>
            <div className="longDescriptrion">
                <p>{news.body}</p>
            </div>
            <div className="phrase">
                {textContent.phraseText}
            </div>
            <p>{textContent.finalText}</p>
            <hr/>
        </div>
    </>
}
