import React, { FC } from 'react'
import { IoDownloadOutline } from 'react-icons/io5'

interface InputFileProps {
    setImage: (value: any) => void
    title: string
    style?: string
    fileName?: any
}

export const InputFile: FC<InputFileProps> = ({ setImage, title, style = 'input__file-button', fileName }) => {

    return (
        <div className="input__wrapper">
            <input name="file" type="file" id="input__file" className="input input__file" multiple
                onChange={(e) => setImage(e)}
            />
            {fileName && <div className='input__file-name'>FileName: {fileName.name}</div>}
            <label htmlFor="input__file" className={style} >
                <span>{title} <IoDownloadOutline /></span>
            </label>
        </div>
    )
}
