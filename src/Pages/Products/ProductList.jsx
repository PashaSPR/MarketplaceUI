import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../global.css';
import axios from 'axios';

function ProductList() {
  // const [goodsOrders, setGoodsOrders] = useState([]);
  const [goodsInvoices, setGoodsInvoices] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/goodsinvoices')
      .then(response => setGoodsInvoices(response.data))
      .catch(error => console.log(error));

    // axios.get('http://localhost:8080/goodsOrders')
    //   .then(response => setGoodsOrders(response.data))
    //   .catch(error => console.log(error));
  }, []);
  console.log(goodsInvoices);
  // if (goodsInvoices.length === 0 || !Array.isArray(goodsInvoices)) {
  //   return <div>Товарів ще немає</div>;
  // }

  return (
    <div className="Main">
      <h1>Усі товари</h1>
      {goodsInvoices.map(goodsInvoice => (
        <div key={goodsInvoice.id}>
           <Link to={`/goodsInvoices/${goodsInvoice.id}`}>
              <button className='btn-list'>
                <div className='name-img'>
                  <h2>{goodsInvoice.goods.name}</h2>
                  {goodsInvoice.goods.photosGoodsDTOS && goodsInvoice.goods.photosGoodsDTOS.length > 0 ? (
                    <img
                      src={goodsInvoice.goods.photosGoodsDTOS[0].path}
                      alt={goodsInvoice.goods.photosGoodsDTOS[0].discription}
                      onError={(e) => {
                        e.target.src = "https://image-thumbs.shafastatic.net/807950839_310_430"; // Дефолтне фото в разі помилки завантаження
                      }}
                    />
                  ) : (
                    <img src="https://image-thumbs.shafastatic.net/807950839_310_430" alt="Дефолтне фото" />
                  )}
                </div>

                <div className='price'>
                  <table>
                    <tr>

                      {/*ціна з кошика можна зробити прибуткова*певний відсоток(навар) */}
                      
                      <td><h1>Ціна: </h1></td> <td><h3>{goodsInvoice.price}</h3></td>
                    </tr>
                    {/*залишок на складі(прихідна накладна) */}
                    <tr>
                      <td><h1>Залишок: </h1></td>
                      <td>
                        <h3>{goodsInvoice.quantity}</h3>

                      </td>
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

