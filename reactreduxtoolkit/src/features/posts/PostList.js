import { useSelector } from "react-redux";
import React from 'react'

import { postAdded, selectAllPosts } from "./postsSlice";

import PostAuthor from "./PostAuthor";
import TimeAgo from './TimeAgo';


const PostList = () => {
    // receive data from state
    // const posts = useSelector(state => state.posts);
    const posts = useSelector(selectAllPosts);

    const renderedPosts = posts.map(post => (
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0, 100)}</p>
            <p>
                <PostAuthor userId={post.user} />
                <TimeAgo timestamp={post.date} />
            </p>
        </article>
    ))

    return (
        <section className="py-5">
            <div className="card">
                <div className="card-header">Posts</div>
                { renderedPosts }
            </div>
        </section>
    )
}

export default PostList;