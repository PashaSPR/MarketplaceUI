import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../global.css';
import axios from 'axios';

export default function SubCategories(){
    const [subCategories, setSubCategories] = useState([]);

    useEffect(() => {
      // Отримання списку категорій з сервера або API
      axios.get('http://localhost:8080/subcategoriesGoods')
        .then(response => setSubCategories(response.data))
        .catch(error => console.log(error));
    }, []);
  
    if (!Array.isArray(subCategories)) {
      return <div>Loading...</div>; // Або можна показати попередження або помилку
    }
    return (
        <div className="Main">
          <h1>Субкатегорії</h1>
          {subCategories.map(subCategory => (
            <div key={subCategory.id}>
              <Link to={`/subcategoriesGoods/${subCategory.id}`}> 
                <button className='btn-old'>
                  <h2>{subCategory.name}</h2> 
                </button>
              </Link>
            </div>
          ))}
        </div>
      );
}