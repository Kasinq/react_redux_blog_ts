import React, { FC } from 'react'

interface PageTitleProps {
  title: string
  subTitle?: string
}

export const PageTitle:FC<PageTitleProps> = ({title, subTitle}) => {
  return (
    <div className='page__title'>
        <h1>{title}</h1>
        <span>{subTitle}</span>
    </div>
  )
}
