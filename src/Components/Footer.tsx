import React from 'react';

export const Footer = () => {
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
                <a href="#">BEAUTY OF NATURE</a><span>July 22, 2015</span>
                <a href="#">FASHION MODEL SHOOT</a><span>July 22, 2015</span>
                <a href="#">GOLDEN SNOW LAND</a><span>July 22, 2015</span>
            </div>
            <div className="recentNews">
                <div className="title">POPULAR POSTS</div>
                <a href="#">TOP 10 INGREDIENTS</a><span>July 22, 2015</span>
                <a href="#">FAMILY COMES FIRST</a><span>July 22, 2015</span>
                <a href="#">GOLDEN SNOW LAND</a><span>July 22, 2015</span>
            </div>
        </div>
        <div className="futerBar">
            <div className="copyright">@ Copyright Seily Blog</div>
            <div className="navMenu">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Contact Me</a>
            </div>
        </div>
    </div>
}
