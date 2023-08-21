//import {Link, useLoaderData} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
 

export default function UserPage(){
    const [user, setUser] = useState(null);
    const { userId } = useParams();

    useEffect(() => {
      // Запит до API для отримання даних про користувача за id
      axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => setUser(response.data))
        .catch(error => console.log(error));
    }, [userId]);

    if (!user) {
      return <div>Loading...</div>;
    }
    return (
        <div>
            <h1>Деталі користувача {user.name}</h1>
            <p>ID: {user.id}</p>
            <p>Ім'я: {user.name}</p>
            <p>Ім'я користувача: {user.username}</p>
            {/**/ } <p>Email: {user.email}</p>
            {user.address && (
                <p>Адреса: {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>
            )}
            <p>Телефон: {user.phone}</p>
            <p>Вебсайт: {user.website}</p>
            <p>Компанія: {user.company.name}</p>
            <p>Фраза компанії: {user.company.catchPhrase}</p>
            <p>BS: {user.company.bs}</p>
        </div>
    );
}
