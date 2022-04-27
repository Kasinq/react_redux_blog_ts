import React, { FC } from 'react'

interface AuthFormprops {
    title: string
    style?: string
}

export const AuthForm: FC<AuthFormprops> = ({ title, style, children }) => {
    return (
        <div className={style}>
            <div className='login'>
                <h1>{title}</h1>
                {children}
            </div>
        </div>

    )
}
