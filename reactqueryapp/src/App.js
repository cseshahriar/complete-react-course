import React, {useState } from "react";
import { useQuery } from 'react-query';

// bootstrap
import Table from 'react-bootstrap/Table';
import Spinner from 'react-bootstrap/Spinner';

import './App.css';
import Post from "./components/Post";
import client from "./react-query-client";

const fetcher = (url) => {
    return fetch(url)
            .then(response => response.json())
}

function App() {
    // state
    const [postID, setPostID ] = useState(null);

    const {isLoading, data } = useQuery(
          'posts',
        () => fetcher("https://jsonplaceholder.typicode.com/posts")
      )

    if(isLoading) {
        return (
            <div className="App">
                <div className="container py-5">
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
            </div>
        );
    }

    if(postID !== null) {
        return <Post postID={postID} goBack={() => setPostID(null)} />
    }

    return (
        <div className="App">
            <div className="container py-5">
                <div className="row">
                    <div className="col">
                        <h1>Posts</h1>
                        <Table striped bordered hover size="sm">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Title</th>
                                <th>Actions</th>
                            </tr>
                            </thead>

                            <tbody>
                                {
                                    data.map(post => {
                                        const cachedPost = client.getQueryData(['post', post.id])

                                        return (
                                            <tr key={post.id}>
                                                <td>{post.id}</td>
                                                <td>{post.title}</td>
                                                <td>
                                                    {
                                                        cachedPost
                                                            ? '(visited)'
                                                            : <a className="btn btn-sm btn-primary" href="#"
                                                               onClick={() => setPostID(post.id)}>View</a>
                                                    }
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
