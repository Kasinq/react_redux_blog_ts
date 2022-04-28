import React, { FC, useState } from 'react';
import { IoIosAdd } from "react-icons/io";
import ModalWindow from '../UI/ModalWindow';
import { InputFile } from '../UI/InputFile';
import { Tags } from './Tags';
import { IoPricetagsSharp } from 'react-icons/io5';
import { useNavigate } from 'react-router';
import { createPost } from '../store/reducers/ActionCreators';
import { useAppSelector } from '../hooks/redux';
import { RootState } from '../store/store';
import { useDispatch } from 'react-redux';

const AddNews: FC = () => {
    const userAuth = useAppSelector((state: RootState) => state.userAuthReducer)
    const router = useNavigate()
    const dispatch = useDispatch()

    const [modal, setModal] = useState(false)
    const [text, setText] = useState(0)
    const [textTitle, setTextTitle] = useState(0)

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [fileImg, setFileImg] = useState<any>()
    const [error, setError] = useState('')
    // tegs
    const [tag, setTag] = useState('')
    const [tags, setTags] = useState<any>([])
    const tags2 = JSON.stringify(tags)

    const addPost = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append("name", name.toLocaleLowerCase())
        formData.append("description", description)
        formData.append("typeId", userAuth.id.toString())
        formData.append("brandId", '1')
        formData.append("info", tags2)
        formData.append("file", fileImg)
        try {
            dispatch(createPost(formData))
            setModal(!modal)
        } catch (e: any) {
            setError(e.response?.data.message)
        }
        setName('')
        setDescription('')
    }

    const addImg = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setFileImg(e.target.files?.[0])
    }

    const addTeg = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setTags([...tags, tag.toLocaleLowerCase()])
        setTag('')
    }

    const removeTag = (tagId: number) => {
        setTags(tags.filter((item: any, i: number) => i !== tagId))
    }

    return (
        <>
            <ModalWindow visible={modal} setVisible={setModal}>
                {userAuth.id === 0 ? <><div className='authorisations'>
                    <div> Зареєструйтесь для додавання постів</div>
                    <span onClick={() => router(`/auth`)}>Registration</span>
                </div>
                </>
                    : <form className="form">
                        <h3>Enter Title *</h3>
                        <div className='description_area'>
                            <input type="text" placeholder="Enter title"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                onKeyUp={() => setTextTitle(name.length)}
                                maxLength={60}
                            />
                            <span className='character_counter'>{textTitle} / 60</span>
                        </div>
                        <h3>Enter Comment *</h3>
                        <div className='description_area'>
                            <textarea placeholder="Enter text"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                maxLength={250}
                                onKeyUp={() => setText(description.length)} />
                            <span className='character_counter'>{text} / 250</span>
                        </div>
                        {error && <div className='error'>{error}</div>}
                        {tags.length !== 0 && <div className='tags'><IoPricetagsSharp color='rgb(104, 104, 104)' />
                            <Tags tags={tags} removeTag={removeTag} />
                        </div>
                        }
                        <div className='addTags'>
                            <h3>Tags:</h3>
                            <input type="text" placeholder="Enter tags"
                                value={tag}
                                onChange={(e) => setTag(e.target.value)}
                            />
                            <button onClick={(e) => addTeg(e)}>Add</button>
                        </div>
                        <InputFile setImage={addImg} title='Add image' style='input__file-v2' fileName={fileImg} />
                        <button onClick={(e) => addPost(e)} >Add post</button>
                    </form>}
            </ModalWindow>
            <button className='addNewBtn' onClick={() => setModal(!modal)}>ADD NEWS<IoIosAdd className='IoIosAdd' /></button>
        </>
    );
};

export default AddNews;