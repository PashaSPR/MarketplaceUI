import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../global.css';
import axios from 'axios';

export default function Categories() {
  // Отримання списку категорій
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Отримання списку категорій з сервера або API
    axios.get('http://localhost:8080/categoriesGoods')
      .then(response => setCategories(response.data))
      .catch(error => console.log(error));
  }, []);

  if (!Array.isArray(categories)) {
    return <div>Loading...</div>; // Або можна показати попередження або помилку
  }

  return (
    <div className="Main">
      <h1>Категорії</h1>
      {categories.map(category => (
        <div key={category.id}>
          <Link to={`/categoriesGoods/${category.id}`}> 
            <button className='btn-old'>
              <h2>{category.name}</h2> 
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
}
