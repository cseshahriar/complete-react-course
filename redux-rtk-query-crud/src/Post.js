import React from 'react';
import {useParams} from "react-router-dom";

import { useGetPostByIdQuery } from './services/post';

const Post = () => {
    const { post_id } = useParams();
    const { data, error, isLoading } = useGetPostByIdQuery(post_id);

    console.log(data)

    return (
        <div className='container py-4'>
            <div className='row'>
                {
                    error ? (
                        <>{ error }</>
                    ) : isLoading ? (
                        <>Loading...</>
                    ) : data ? (
                        <div className='col'>
                            <div className='card p-3'>
                                <h3 className='card-heading'>{ data.title }</h3>
                                <div className='card-body'>
                                    <p>{ data.body }</p>
                                </div>
                            </div>

                        </div>
                    )  : (
                        <h3>Data not found</h3>
                    )
                }
            </div>
        </div>
    );
};

export default Post;