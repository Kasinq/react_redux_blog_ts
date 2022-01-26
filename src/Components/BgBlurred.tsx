import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { State } from '../state'; 
 
const BgBlurred:FC = ({children}) => {
    const background = useSelector((state: State) => state.news.background)
    
    const [scrolling, setScrolling] = useState(0)

    window.addEventListener('scroll', () => {
        setScrolling(window.scrollY / 380)
    })

    return (
        <div className="PageBacgroundHeader" style={{ backgroundImage: background.images[1] }}>
            <img style={{ opacity: scrolling }} src={background.images[0]} alt="" />
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
