import React, {useState, useEffect } from "react";
import { useQuery } from 'react-query';

// bootstrap
import Table from 'react-bootstrap/Table';
import Spinner from 'react-bootstrap/Spinner';

import './App.css';

const fetcher = (url) => {
    return fetch(url)
            .then(response => response.json())
}

function App() {
    const [repoName, setReponame ] = useState('');
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
                                    data &&  data.map(post => (
                                        <tr key={post.id}>
                                            <td>{post.id}</td>
                                            <td>{post.title}</td>
                                            <td>
                                                <a className="btn btn-sm btn-primary" href={`/post/${post.id}`}>View</a>
                                            </td>
                                        </tr>
                                    ))
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
