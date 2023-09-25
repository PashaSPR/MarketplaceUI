import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../global.css';
import axios from 'axios';
function ProductList() {
  // Отримання списку товарів
  // const [products, setProducts] = useState([]);
  const [goodsOrders, setGoodsOrders] = useState([]);
 //  const [goodsInvoices, setGoodsInvoices] = useState([]);

  useEffect(() => {
    // Симулюємо отримання списку товарів з сервера або API
    // axios.get('http://localhost:8080/goods')
    //   .then(response => setProducts(response.data))
    //   .catch(error => console.log(error));
    // axios.get('http://localhost:8080/goodsinvoices')
    //   .then(response => setGoodsInvoices(response.data))
    //   .catch(error => console.log(error));
    axios.get('http://localhost:8080/goodsOrders')
      .then(response => setGoodsOrders(response.data))
      .catch(error => console.log(error));
  }, []);
  // console.log(products);
  // console.log(goodsInvoices);
  console.log(goodsOrders);
  // Перевірка, чи є products масивом перед використанням map
  // if (!Array.isArray(goodsOrders)) {
  //   return <div>Товарів ще немає</div>; // Або можна показати попередження або помилку
  // }
  if (goodsOrders.length === 0) {
    return <div>Товарів ще немає</div>;
  }
  
  return (
    <div className="Main">
      <h1>Список товарів</h1>

      {goodsOrders.map(goodsOrder => (
        <div key={goodsOrder.id}>
          <Link to={`/goodsOrders/${goodsOrder.id}`}>
            <button className='btn-list'>
              <div className='name-img'>
                <h2>{goodsOrder.goodsInvoicesDTO.goods.name}</h2>
                {goodsOrder.goodsInvoicesDTO.goods.photosGoodsDTOS.length > 0 ? (
                  <img src={goodsOrder.goodsInvoicesDTO.goods.photosGoodsDTOS[0].path} alt={goodsOrder.goodsInvoicesDTO.goods.photosGoodsDTOS[0].discription} />
                ) : (
                  <img src="https://images.app.goo.gl/pMxqRJzWJuc8hmws9" alt="Дефолтне фото" />
                )}
              </div>
              <div className='price'>
                <table>
                  <tr>
                    <td><h1>Ціна: </h1></td> <td><h3>{goodsOrder.price}</h3></td>
                  </tr>
                  <tr>
                    <td><h1>Залишок: </h1></td><td><h3>{goodsOrder.quantity}</h3></td>
                  </tr>
                </table>
              </div>
            </button>
          </Link>
        </div>
      ))}
    </div>
  );


}

export default ProductList;