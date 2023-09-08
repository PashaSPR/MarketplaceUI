import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../global.css';
import axios from 'axios';
function ProductList() {
  // Отримання списку товарів
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Симулюємо отримання списку товарів з сервера або API
    axios.get('http://localhost:8080/goods')
      .then(response => setProducts(response.data))
      .catch(error => console.log(error));
  }, []);
  console.log(products);
  // Перевірка, чи є products масивом перед використанням map
  if (!Array.isArray(products)) {
    return <div>Товарів ще немає</div>; // Або можна показати попередження або помилку
  }
  return (
    <div className="Main">
      <h1>Список товарів</h1>
      {products.map(product => (
        <div key={product.id}>
          {/* Виводимо id товару для перевірки */}
          {/* <p>ID: {product.id}</p> */}
          <Link to={`/goods/${product.id}`}>
            <button className='btn-list'>
              <h2>{product.name}</h2>
              <img src={product.photosGoodsDTOS[0].path} alt={product.name}></img>
              <p>{product.short_discription}</p>
            </button>
          </Link>
        </div>
      ))}
    </div>
  );


}

export default ProductList;