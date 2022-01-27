import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { State } from '../state'; 
 
const BgBlurred:FC = ({children}) => {
    // const background = useSelector((state: State) => state.news.background)
    
    const background = {
        images:['../images/post_bg_2.jpg', `url('../images/post_bg.jpg')`],
        text:['PAGE BACKGROUND HEADER', 'THIS IS OPTIONAL PAGE TITLE']
    }
        
    

    const [scrolling, setScrolling] = useState(0)

    window.addEventListener('scroll', () => {
        setScrolling(window.scrollY / 380)
    })

    return (
        <div className="PageBacgroundHeader">
            <img style={{ opacity: scrolling }} src={require('../images/post_bg_2.jpg')} alt="" />
            <div className="PageBacgroundHeader-content">
                {children}
                <h1 className="NewsCategory">
                    {background.text[0]}
                </h1>
                <div>{background.text[1]}</div>
            </div>
        </div>
    )
}
export default BgBlurred
