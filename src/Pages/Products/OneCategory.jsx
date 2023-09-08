import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import '../../global.css';
import axios from 'axios';

export default function OneCategory()
{
  const { categoryId } = useParams();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Отримання списку товарів певної категорії
    axios.get(`http://localhost:8080/categoriesGoods/${categoryId}`)
      .then(response => setCategories(response.data))
      .catch(error => console.log(error));
  }, [categoryId]);
  if (!Array.isArray(categories)) {
    return <div>Loading...</div>; // Або можна показати попередження або помилку
  }
  return (
    <div className="Main">
      <h1>Товари в категорії </h1>
      {categories.map(categories => (
        <div key={categories.id}>
          <h2>{categories.name}</h2>
          <p>ID: {categories.subcategories.name}</p>
          {/* Додайте інші поля товару, які вам потрібні */}
        </div>
      ))}
    </div>
  );
}