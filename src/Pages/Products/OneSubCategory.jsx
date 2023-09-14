import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import '../../global.css';
import axios from 'axios';

export default function OneSubCategory()
{
  const { subCategoryId } = useParams();
  const [subCategories, setSubCategories] = useState([]);

  useEffect(() => {
    // Отримання списку товарів певної категорії
    axios.get(`http://localhost:8080/subcategoriesGoods/${subCategoryId}`)
      .then(response => setSubCategories(response.data))
      .catch(error => console.log(error));
  }, [categoryId]);
  if (!Array.isArray(subCategories)) {
    return <div>Loading...</div>; // Або можна показати попередження або помилку
  }
  return (
    <div className="Main">
      <h1>Товари в категорії </h1>
      {subCategories.map(subCategory => (
        <div key={subCategory.id}>
          <h2>{subCategory.name}</h2>
          <p>ID: {subCategory.subcategories.name}</p>
          {/* Додайте інші поля товару, які вам потрібні */}
        </div>
      ))}
    </div>
  );
}