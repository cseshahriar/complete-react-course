import React from 'react';
import axios from 'axios';

import { useQuery, useMutation,} from 'react-query'

const fetchPosts = async () => {
    try {
        const { data } = await axios.get("https://gorest.co.in/public/v1/posts")
        return data;
    } catch(error) {
        throw Error("Unable to fetch Posts")
    }
}

const Home = () => {
    const {isLoading, data, error } = useQuery('posts', fetchPosts)
    console.log(data)

    return (
        <div>
            <h1>Home component</h1>
        </div>
    );
};

export default Home;