import React, { FC, useEffect, useLayoutEffect, useState } from 'react';

interface BgBlurred {
    backgroundImg?: string
    backgroundTitle: string
    backgroundOptional: string
}

const BgBlurred: FC<BgBlurred> = ({ backgroundImg = 'https://s1.1zoom.me/big0/470/Christmas_Nuts_Mandarine_Wood_planks_Branches_Pine_575378_1280x853.jpg',
    backgroundTitle, backgroundOptional, children }) => {

    const [scrolling, setScrolling] = useState(0)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScrolling(window.scrollY / 40)
        })
        return () => setScrolling(0)
    }, [])

    const [scrollImg, setScrollImg] = useState(50)

    // useEffect(() => {
    //     window.addEventListener('scroll', () => {
    //         setScrollImg(window.scrollY / 40)
    //     })
    //     return () => setScrollImg(0)
    // }, [])

    return (
        <div className="PageBacgroundHeader" >
            <div className="PageBacgroundHeader-content" style={{
                filter: `blur(${scrolling}px)`, backgroundImage: `url(${backgroundImg})`,
                backgroundPosition: `100% ${scrollImg}%`
            }}
            >
                {children}
                <h1 className="NewsCategory">
                    {backgroundTitle}
                </h1>
                <div>{backgroundOptional.toUpperCase()}</div>
            </div>
        </div>
    )
}
export default BgBlurred
