import './App.css';

import { useGetAllPostQuery, useDeletePostMutation } from './services/post';
import { Link } from "react-router-dom";

function App() {
    const { data, error, isLoading } = useGetAllPostQuery();
    const [deletePost, responseInfo] = useDeletePostMutation();

    return (
    <div className="container py-5">
        <div className="row">
            {
                error ? (
                    <>{ error }</>
                ) : isLoading ? (
                    <>Loading...</>
                ) : data ? (
                    <>
                        <h3>All Post
                            <span className='d-inline-block float-end'>
                                <Link to='/posts/create'>Add New</Link>
                            </span>
                        </h3>

                        <table className="table table-striped">
                            <thead className='table-success'>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Handle</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    data.map((post, index) => (
                                        <tr key={index}>
                                            <th>{index + 1}</th>
                                            <td>
                                                <Link to={`/posts/${post.id}`}>
                                                    {post.title}
                                                </Link>
                                            </td>
                                            <td>
                                                <Link to={`/posts/${post.id}/edit`} className='btn btn-sm btn-info'>Edit</Link>
                                                <button onClick={() => { deletePost(post.id) }} className='btn btn-sm btn-danger ms-1'>Delete</button>

                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </>
                ) : (
                    <h3>Data not found</h3>
                )
            }
        </div>
    </div>
  );
}

export default App;
