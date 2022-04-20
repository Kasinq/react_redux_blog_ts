import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { getPosts } from '../api/fetchPosts';
import { useAppSelector } from '../hooks/redux';
import { RootState } from '../store/store';
import { dateMonth } from '../utils/convertDate';

export const Footer = () => {
    const router = useNavigate()
    const [newPosts, setNewPosts] = useState([])
    const [popularPosts, setPopularPosts] = useState([])

    useEffect(() => {
        getPosts(1, 3, 'new', setNewPosts)
        getPosts(1, 3, 'popular', setPopularPosts)
    }, [])

    return <div className="futer">
        <div className="inner">
            <img src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/letsblog/demo/wp-content/themes/letsblog/images/logo@2x_white.png" />
            <form>
                <div className="title">SUBSCRIPTION</div>
                <input className="inp" type="text" placeholder="Your email address" />
                <button className="button">SUBSCRIBE</button>
            </form>
            <div className="recentNews recentNews_inner">
                <div className="title">RECENT POSTS</div>
                {newPosts.map((item: any) => <div className='recentNews-items' key={item.id}>
                    <a onClick={() => router(`/news/${item.id}`)}>{item.name}</a>
                    <span>{dateMonth(item.updatedAt)}</span>
                </div>)}
            </div>

            <div className="recentNews recentNews_inner">
                <div className="title">POPULAR POSTS</div>
                {popularPosts.map((item: any) => <div className='recentNews-items' key={item.id}>
                    <a onClick={() => router(`/news/${item.id}`)}>{item.name}</a>
                    <span>{dateMonth(item.updatedAt)}</span>
                </div>)}
            </div>
        </div>
        <div className="futerBar">
            <div className="copyright">@ Copyright Seily Blog</div>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact Me</a>
        </div>
    </div>
}
