import React, { FC, useState } from 'react'

interface SocialItemsProps {
    imgSize?: string
}

export const SocialItems:FC<SocialItemsProps> = ({imgSize = '20px'}) => {

    return (
        <div className="social">
            <a href="#"><img width={imgSize} src="https://cdn-icons-png.flaticon.com/512/49/49052.png" alt="Facebook" title="Facebook" /></a>
            <a href="#"><img width={imgSize} src="https://cdn-icons-png.flaticon.com/512/48/48898.png" alt="Instagram" title="Instagram" /></a>
            <a href="#"><img width={imgSize} src="https://cdn-icons-png.flaticon.com/512/48/48899.png" alt="Pinterest" title="Pinterest" /></a>
            <a href="#"><img width={imgSize} src="https://cdn-icons-png.flaticon.com/512/49/49043.png" alt="Twiter" title="Twiter" /></a>
        </div>
    )
}
