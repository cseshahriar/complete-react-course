import { useSelector } from "react-redux";
import React from 'react'

import { selectAllPosts } from "./postsSlice";

const PostList = () => {
    // receive data from state
    // const posts = useSelector(state => state.posts);
    const posts = useSelector(selectAllPosts);

    const renderedPosts = posts.map(post => (
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0, 100)}</p>
        </article>
    ))

    return (
        <section className="py-5">
            <div class="card">
                <div class="card-header">Posts</div>
                { renderedPosts }
            </div>
        </section>
    )
}

export default PostList;