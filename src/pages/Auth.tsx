import React, { useState } from 'react';
import { Authorisation } from '../Components/Authorisation';
import { Registration } from '../Components/Registration';

export const Auth = () => {

    const [style, setStyle] = useState('')

    return <div className='auth_area'>
        <div className='auth container'>
            <div className={'registration ' + style} style={{ backgroundImage: `url('https://images.unsplash.com/photo-1520716497194-0bde97ce9abe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80')` }}>
                <button onClick={() => setStyle('click')}>Registration</button>
            </div>
            <Authorisation />
            <Registration />
        </div>
    </div>
};
