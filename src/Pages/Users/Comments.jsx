// import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Comments() {
    const [comments, setComments] = useState([]);
    const [posts, setPosts] = useState([]);
    //const { id } = useParams();
    useEffect(() => {
        // Симулюємо отримання списку коментарів з сервера або API
        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${2}`)
            .then(response => setComments(response.data))
            .catch(error => console.log(error));

        // Симулюємо отримання списку постів з сервера або API
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
            .then(response => setPosts(response.data))
            .catch(error => console.log(error));
    }, []);

    // Функція для пошуку за ID
    const findpostById = (postId) => {
        return posts.find(post => post.id === postId);
    }

    return (
        <div className="Main">
            <div>
                <table style={{ border: '1px solid black', width: '100%' }}>
                    <thead>
                        <tr style={{ background: 'lightgray', padding: '5px', border: '1px solid black' }}>
                            <th>ID post</th>
                            <th>Title</th>
                            <th>body</th>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>body</th>
                        </tr>
                    </thead>
                    <tbody style={{ padding: '5px' }}>
                        {comments.map((comment) => {
                            const post = findpostById(comment.postId); // Знайти користувача за ID коментаря
                            return (
                                <tr rowSpan='5' key={comment.id} style={{ border: '1px solid black', padding: '5px' }}>
                                    
                                    <td >{post.id}</td>
                                    <td>{post ? post.title : 'post not found'}</td>
                                    <td>{post ? post.body : 'post not found'}</td>
                                    <td>{comment.id}</td>
                                    <td>{comment.name}</td>
                                    <td>{comment.email}</td>
                                    <td>{comment.body}</td>
                                    
                                    
                                </tr>
                            );
                        })}
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
}
