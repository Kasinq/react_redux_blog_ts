import React, { FC, useEffect, useState } from 'react'
import { IoEye } from 'react-icons/io5'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { IPost } from '../models/IPosts'
import { dateMonth } from '../utils/convertDate'

interface NewsItemProps {
    posts:IPost[]
}

export const NewsItem: FC<NewsItemProps> = ({posts}) => {
    const router = useNavigate()
    return (
        <div className='catalog'>
            {posts?.map((news: any) =>
                <div key={news.id} className='catalog__card'
                    onClick={() => router(`/news/${news.id}`)} >
                    <img src={news.img} alt="post-img" />
                    <h2 className="titlePost">{news.name}</h2>
                    <div onClick={(e) => e.stopPropagation()}>
                        <div className="datePost"><span>{dateMonth(news.createdAt)}</span></div>
                        <div className="textPost">{news.description}</div>
                    </div>
                    <div className='inner-btn'>
                        <button>Read More</button>
                        <div onClick={(e) => e.stopPropagation()}>
                            <span>{news.rating}<IoEye /></span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
