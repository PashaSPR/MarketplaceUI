import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../global.css';
import axios from 'axios';
export default function Categories() {
  // Отримання списку товарів
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Симулюємо отримання списку товарів з сервера або API
    axios.get('http://localhost:8081/categoriesGoods')
      .then(response => setCategories(response.data))
      .catch(error => console.log(error));
  }, []);
  console.log(categories);
  if (!Array.isArray(categories)) {
    return <div>Loading...</div>; // Або можна показати попередження або помилку
  }
  return (
    <div className="Main">
      <h1>Категорії</h1>
      {categories.map(category => (
        <div>
          {/* Виводимо id товару для перевірки */}
          {/* <p>ID: {product.id}</p> */}
          <Link to={`/categoriesGoods`}>
           <button className='btn-list'>
              <h2>{category.name}</h2> 
            </button>
          </Link>
        </div>
      ))}
    </div>
  );


}