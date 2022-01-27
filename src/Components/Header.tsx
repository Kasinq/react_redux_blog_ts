import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

const Header: FC = () => {
    return (
        <header className="header">
            <NavLink to="/react_redux_blog_ts">News</NavLink>
            <NavLink to="/friends">Friends</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact me</NavLink>
        </header>
    );
};

export default Header;