import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { postAdded } from './postsSlice';

function AddPostForm() {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const onTitleChange = e => {
        setTitle(e.target.value);
    }
    
    const onContentChange = e => {
        setContent(e.target.value);
    }

    const onSavePostClicked = () => {
        if(title && content) {
            dispatch(
                postAdded({
                    id: nanoid,
                    title, 
                    content
                })
            )

            setTitle('')
            setContent('')
        }
    }

  return (
    <section className='py-5'> 
        <div class="card">
            <div class="card-header">Add a New Post</div>
            <div class="card-body">
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
                    <button onClick={onSavePostClicked} type='button' className='btn btn-success mt-2'>Save Post</button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default AddPostForm