import React, { FC, useEffect } from 'react'
import { IoCloseOutline } from 'react-icons/io5'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
interface TagsProps {
  tags: any
  removeTag?: (value: any) => void
}
export const Tags: FC<TagsProps> = ({ tags, removeTag }) => {

  const dispatch = useDispatch()
  const router = useNavigate()

  const search = (title: string) => {
    router(`/react_redux_blog_ts/${title}`)
  }

  return <>
    {
      tags?.map((tag: any, i: number) => <span key={i} className='tag' onClick={() => search(tag?.title)}>{tag?.title || tag}
        {removeTag && <IoCloseOutline size='12px' className='closeOutline' onClick={() => removeTag(i)} />}
      </span>)
    }
  </>
}
