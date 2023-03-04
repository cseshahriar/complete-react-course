import React, { useEffect ,useState } from 'react';
import {  useCreatePostMutation } from './services/post';


const AddPost = () => {
    const [createPost, createResponse] = useCreatePostMutation();

    const [postData, setPostData ] = useState({
        title: '',
        body: '',
        userId: 1,
    })

    const handleChange = (event) => {
        setPostData({
            ...postData, [event.target.name]: event.target.value
        })
    }

    const formSubmit = (e) => {
        e.preventDefault();
        const _formData = new FormData();
        _formData.append('title', postData.title)
        _formData.append('body', postData.body)
        _formData.append('userId', postData.userId)

        try {
            createPost(_formData);
        } catch (error) {
            console.log(error);
        }
    }

    console.log(createResponse);

    return (
        <div className='container py-5'>
            <div className='row'>
                <div className='col-md-6 offset-3'>
                    <h1>Post Create</h1>

                    <form>
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Title</label>
                            <input onChange={handleChange} type="text" name='title'  className="form-control" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="body" className="form-label">Description</label>
                            <textarea onChange={handleChange} type="body" name='body' className="form-control"></textarea>
                        </div>

                        <button onClick={formSubmit} type="submit" className="btn btn-primary">Submit</button>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default AddPost;