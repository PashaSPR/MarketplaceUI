import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Comments from '../Users/Comments';
import '../../global.css';
import ModalWnd from '../../components/Modal/ModalWnd';
import axios from 'axios';

export default function ProductDetails() {
  const [modalState, setModalState] = useState(false);
  // const [product, setProduct] = useState(null);
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('Опис');
  const [goodsOrder, setGoodsOrder] = useState(null);
  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  useEffect(() => {
    axios.get(`http://localhost:8080/goodsOrders/getOne?id=${id}`)
      .then(response => setGoodsOrder(response.data))
      .catch((error) => console.log(error));
      // axios.get(`http://localhost:8080/goodsOrders/getOne?id=${11}`)
      //   .then(response => setGoodsOrders(response.data))
      //   .catch(error => console.log(error));
  }, [id]);

  if (!goodsOrder) {
    return <div>Loading...</div>;
  }
  // console.log(goodsOrders);
  return (
    <div className='Main'>
      <h1>{goodsOrder.goodsInvoicesDTO.goods.name}</h1>
      <table>
        <tr>
          <td>
            {goodsOrder && goodsOrder.goodsInvoicesDTO.goods.photosGoodsDTOS && goodsOrder.goodsInvoicesDTO.goods.photosGoodsDTOS.length > 0 && (
              <img src={goodsOrder.goodsInvoicesDTO.goods.photosGoodsDTOS[0].path} alt={goodsOrder.goodsInvoicesDTO.goods.name} />
            )}
          </td>
          <td>
            <div className="App">
              <ModalWnd call={modalState} onDestroy={() => setModalState(false)} />
              <button onClick={() => setModalState(true)} className='btn-buyGoods'>Додати в кошик</button>
              <button><Link to="/goodsOrders">Повернутися до товарів</Link></button>
              
              <td><p>Залишок: <span>{goodsOrder.quantity}</span></p> <p>Ціна <span>{goodsOrder.price}</span></p></td>
            </div>
          </td>
        </tr>
        
      </table>

      <div className='tabs'>
        <button
          className={activeTab === 'Опис' ? 'active-tab' : ''}
          onClick={() => handleTabChange('Опис')}
        >
          Опис
        </button>
        <button
          className={activeTab === 'Характеристика' ? 'active-tab' : ''}
          onClick={() => handleTabChange('Характеристика')}
        >
          Характеристика
        </button>
        <button
          className={activeTab === 'Коментарі' ? 'active-tab' : ''}
          onClick={() => handleTabChange('Коментарі')}
        >
          Коментарі
        </button>
      </div>
      <hr />

      {activeTab === 'Опис' && (
        <>
          <table>
            {/* Ваш існуючий вміст для вкладки "Опис" */}
          </table>
          <p>{goodsOrder.goodsInvoicesDTO.goods.short_discription}</p>
        </>
      )}

      {activeTab === 'Характеристика' && (
        <>
          <p>Властивості</p>
        </>
      )}

      {activeTab === 'Коментарі' && (
        <>
          <Comments />
        </>
      )}
    </div>
  );
}
