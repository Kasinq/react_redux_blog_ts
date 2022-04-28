import React, { FC, useEffect, useLayoutEffect, useState } from 'react';
import { Scrollable } from '../hooks/Scrollable';

interface BgBlurred {
    backgroundImg?: string
    backgroundTitle?: string
    backgroundOptional?: string
    style?: string
    height?: string
}

const BgBlurred: FC<BgBlurred> = ({ backgroundImg = 'https://s1.1zoom.me/big0/470/Christmas_Nuts_Mandarine_Wood_planks_Branches_Pine_575378_1280x853.jpg',
    backgroundTitle, backgroundOptional, children, style = 'bg-container', height = '90%' }) => {

    const [scrolling, setScrolling] = useState(0)
    const [display, setDisplay] = useState(style)

    useEffect(() => {
        if (height = '30%') {
            window.addEventListener('scroll', () => {
                setScrolling(window.scrollY / 40)
            })
        }
        return () => {
            setScrolling(0)
        }
    }, [])

    const bgContent = <div className="PageBacgroundHeader" >
        <div className="PageBacgroundHeader-content" style={{
            filter: `blur(${scrolling}px)`, backgroundImage: `url(${backgroundImg})`, height: `${height}`,
        }}>
            {children}
            <h1 className="NewsCategory">
                {backgroundTitle}
            </h1>
            <div>{backgroundOptional?.toUpperCase()}</div>
        </div>
    </div>

    return (
        <div className={display}>
            {height == '30%'
                ? bgContent
                : <Scrollable style='postDitailBg'>
                    {bgContent}
                </Scrollable>
            }

        </div>
    )
}
export default BgBlurred
