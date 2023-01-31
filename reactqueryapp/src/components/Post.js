import React from 'react';
import { useQuery } from 'react-query';

const fetcher = (url) => {
    return fetch(url)
        .then(response => response.json())
}

const Post = ({postID, goBack}) => {
    const {data, isLoading} = useQuery(
        ['post', postID],
        () => fetcher(`https://jsonplaceholder.typicode.com/posts/${postID}`),
        {
            cacheTime: 0
        }
    )

    if(isLoading) {
        return <h1>Loading ...</h1>
    }

    return (
        <div>
            <a  href="#" onClick={goBack}>Go Back</a>
            <h1>{ data.title }</h1>
            <p>{ data.body }</p>
        </div>
    );
};

export default Post;