import { useParams, useNavigate } from "react-router-dom";
export default function Post() {
    const params = useParams();
    const navigate = useNavigate();

    function gotTobPosts() {
        navigate('/posts', {
            replace: true
        })
    }

    function gotToBack() {
        navigate(-2);
        // -1 one step back or prev
        // -2 for 2 step
    }

    return (
        <div>
            <h1>Post</h1>
            <p>Post id is {params.postId}</p>
            <button onClick={gotTobPosts}>Go to posts</button>
            <button onClick={gotToBack}>Go to Back</button>
        </div>
    );
}
