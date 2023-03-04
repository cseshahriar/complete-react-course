import React, { useEffect ,useState } from 'react';
import {useParams} from "react-router-dom";

import { useGetPostByIdQuery, useUpdatePostMutation } from './services/post';

const AddPost = () => {
    const { post_id } = useParams();
    const [updatePost, updateResponse] = useUpdatePostMutation();

    const [postData, setPostData ] = useState({
        id: parseInt(post_id),
        title: '',
        body: '',
        userId: 1,
    })

    const { data, error, isLoading } = useGetPostByIdQuery(post_id);

    useEffect(() => {
        if(data) {
            setPostData(data)
        }
    }, [])

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
            updatePost(_formData);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='container py-5'>
            <div className='row'>
                <div className='col-md-6 offset-3'>
                    <h1>Post Edit</h1>

                    <form>
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Title</label>
                            <input onChange={handleChange} type="text" name='title' value={postData.title}  className="form-control" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="body" className="form-label">Description</label>
                            <textarea onChange={handleChange} type="body" name='body' className="form-control" value={postData.body}></textarea>
                        </div>

                        <button onClick={formSubmit} type="submit" className="btn btn-primary">Submit</button>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default AddPost;