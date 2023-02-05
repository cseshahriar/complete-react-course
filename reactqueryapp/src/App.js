import React from "react";
import './App.css';

import SpinnerComponent from "./components/Spinner";
import MessageComponent from "./components/Message";

import {useQuery} from "react-query";

const POSTS = [
    {id: 1, title: 'Post 1'},
    {id: 2, title: 'Post 2'},
]


function App() {

    const postsQuery = useQuery({
        queryKey: ['posts'],
        queryFn: () => wait(1000).then(() => [...POSTS])
        // queryFn: () => Promise.reject("Error message")
    });

    // is is loading
    if(postsQuery.isLoading) {
        return <SpinnerComponent/>
    }

    if(postsQuery.isError) {
        return <MessageComponent
            variant="danger"
            message={JSON.stringify(postsQuery.error)}
        />
    }


    return (
        <div className="App">
            <h1>Posts</h1>
            {
                postsQuery.data.map(post =>
                    <div key={post.id}>{ post.title }</div>
                )
            }
        </div>
    );
}

function wait(duration) {
    return new Promise(resolve => setTimeout(resolve, duration))
}

export default App;
