import '../../global.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Posts() {
    const [posts, setPost] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => setPost(response.data))
            .catch(error => console.log(error));
    }, []);

    return (
        <div className='Main'>
            <h1>Пости</h1>
            {posts.map(post=> (
            <div>
             <h1>{post.title}</h1>
             <h4>{post.body}</h4>
             <p></p>
             </div>
            ))}
        </div>
        );
}