import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '..//../global.css';

export default function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Симулюємо отримання списку товарів з сервера або API
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => setUsers(response.data))
            .catch(error => console.log(error));
    }, []);

    return (
        <div className="Main">
            <div>
                <h1 style={{ textAlign: 'center' }}>USERS 
                <Link to='https://jsonplaceholder.typicode.com'>jsonplaceholder</Link>
                </h1>
                <table className='userlist'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Phone</th>
                            <th>Website</th>
                            <th>Company</th>
                            <th>Phrase</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>
                                    <Link to={`/users/${user.id}`} className='green-link'>{user.name}</Link>
                                </td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{`${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`}</td>
                                <td>{user.phone}</td>
                                <td>{user.website}</td>
                                <td>{user.company.name}</td>
                                <td>{user.company.catchPhrase}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
