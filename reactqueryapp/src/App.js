import React from "react";
import './App.css';

import SpinnerComponent from "./components/Spinner";
import MessageComponent from "./components/Message";

import {useQuery, useMutation, useQueryClient} from "react-query";

const POSTS = [
    {id: 1, title: 'Post 1'},
    {id: 2, title: 'Post 2'},
]

// /posts -> ['posts']
// /posts/1 -> ['posts', post.id]
// /posts?authorId=1 ['posts', {authorId: 1}]
// /posts/2/comments -> ['posts', post.id, "comments"]


function App() {
    const queryClient = useQueryClient();

    const postsQuery = useQuery({
        queryKey: ['posts'],
        queryFn: (obj) => wait(1000).then(() => {
            console.log(obj)
            return [...POSTS]
        })
    });

    const newPostMutation = useMutation({
        mutationFn: title => {
            return wait(1000).then(
                () => POSTS.push({id: crypto.randomUUID(), title})
            )
        },
        onSuccess: () => {
            queryClient.invalidateQueries('posts');  // invalid posts
        }
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

            <button disabled={newPostMutation.isLoading} onClick={() => newPostMutation.mutate('New Post')}>
                Add new
            </button>
        </div>
    );
}

function wait(duration) {
    return new Promise(resolve => setTimeout(resolve, duration))
}

export default App;
