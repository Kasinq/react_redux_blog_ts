import React, { useState } from 'react';
import { SubscriptionForm } from './SubscriptionForm';

export const AuthorInfo = () => {

    // профіль описання 
    const [profileDescription, setProfileDescription] = useState('Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus.')

    return (
        <div className='authorInfo'>
            <div className="about-me">
                <div>ABOUT ME</div>
                <img className="avatar" src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/letsblog/demo/wp-content/uploads/2015/07/photography_2.jpg" alt="" />
                <p className="textDescription">{profileDescription}</p>
                <div className="signature">
                    <img className="sign" src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/letsblog/demo/wp-content/uploads/2015/07/signature.png" alt="" />
                </div>
            </div>
            <div className="subscription">
                <SubscriptionForm />
            </div>
            <div className="about-me follow-me">
                <div>FOLLOW ME ON</div>
                <div className="social">
                    <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/49/49052.png" alt="Facebook" title="Facebook" /></a>
                    <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/48/48898.png" alt="Instagram" title="Instagram" /></a>
                    <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/48/48899.png" alt="Pinterest" title="Pinterest" /></a>
                    <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/49/49043.png" alt="Twiter" title="Twiter" /></a>
                </div>
            </div>
        </div>
    )
}
