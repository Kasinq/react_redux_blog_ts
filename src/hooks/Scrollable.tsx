import React, { FC } from 'react'
interface scrollableProps {
  style: string
}
export const Scrollable:FC<scrollableProps> = ({ style, children }) => {
  return (
    <div className={style} >
        {children}
    </div>
  )
}
