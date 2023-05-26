import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { postAdded } from './postsSlice';
import { selectAllUsers } from '../users/usersSlice';

function AddPostForm() {
    const dispatch = useDispatch();

    // temporarily state
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [userId, setUserId] = useState('');

    const users = useSelector(selectAllUsers);

    const onTitleChange = e => {
        setTitle(e.target.value);
    }
    
    const onContentChange = e => {
        setContent(e.target.value);
    }

    const onAuthorChanged = e => {
        setUserId(e.target.value);
    }

    const onSavePostClicked = () => {
        if(title && content) {
            dispatch(
                postAdded(title, content, userId)
            )
            setTitle('')
            setContent('')
            setUserId('')
        }
    }

    const userOptions = users.map(user => (
        <option key={user.id} value={user.id}>{user.name}</option>
    ))
    
    const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

    return (
        <section className='py-5'> 
            <div className="card">
                <div className="card-header">Add a New Post</div>
                <div className="card-body">
                    <form> {/* control form */}
                        <div className='form-group'>
                            <label htmlFor='postTitle'>Title: </label>
                            <input 
                                className='form-control'
                                type='text'
                                id='postTitle'
                                name='postTitle'
                                value={title}
                                onChange={onTitleChange}
                            />
                        </div>

                        <div className='form-group'>
                            <label htmlFor='postContent'>Content: </label>
                            <textarea 
                                className='form-control'
                                id='postContent'
                                name='postContent'
                                value={content}
                                onChange={onContentChange}
                            />
                        </div>

                        <div className='form-group'>
                            <label htmlFor='userId'>Author: </label>
                            <select name="userId" id="userId" className="form-control" onChange={onAuthorChanged}>
                                <option value="">------ Select User ------</option>
                                { userOptions }
                            </select>
                        </div>
                        
                        <button disabled={!canSave} onClick={onSavePostClicked} type='button' className='btn btn-success mt-2'>Save Post</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default AddPostForm