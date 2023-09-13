import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';//
import '../../global.css';
import ModalWnd from '../../components/Modal/ModalWnd';
import axios from 'axios';

export default function ProductDetails() {
  // Отримання даних деталей товару з джерела (наприклад, API)

  const [modalState, setModalState] = useState(false);
  const [product, setProduct] = useState(null);
  // const [subcategories, setSubcategories] = useState([]);
  const { id } = useParams();
  // console.log(product);
  //   const findSubCategoryById = (Id) => {

  //     return product.findIndex(product => product.subcategories_goods_id === Id);
  // }
  const [activeTab, setActiveTab] = useState('Опис');
  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };
  useEffect(() => {
    // Запит до API для отримання даних про товар за id
    axios.get(`http://localhost:8080/goods/getOne?id=${id}`)
      .then(response => setProduct(response.data))
      .catch((error) => console.log(error));
    // Запит до API для отримання даних про користувача за id
    // axios.get(`http://localhost:8080/subcategoriesGoods/getOne?id=${1}`)
    //   .then(response => setSubcategories(response.data))
    //   .catch((error) => console.log(error));

  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  console.log(product);
  return (
    <div className='Main'>
      {/* <h3>Товар з категорії: <i>{product.subcategoriesGoods.categoriesGoods.name}</i></h3><hr></hr> */}
      {/* <h3>Товар з підкатегорії: <i>{product.subcategoriesGoods.name}</i></h3><hr></hr> */}
      <h1>{product.name}</h1>
      {/* <h2>{product.goodsorders}</h2> */}
      <table>
        <tr>
          <td><img src={product.photosGoodsDTOS[0].path} alt={product.name}></img></td>
          <td><div className="App">
            <ModalWnd call={modalState} onDestroy={() => setModalState(false)} />
            <button onClick={() => setModalState(true)} className='btn-buyGoods'>Додати в кошик </button>
            {/* має записувати в кошик */}
            <button><Link to="/goods">Повернутися до товарів</Link></button>
            <p>Залишок: {product.id}</p>
            <p>Ціна <input type='text' value={product.id} readOnly></input></p>
          </div>
          </td>
        </tr>
      </table>
      {/* <h3>Деталі товару :</h3><hr></hr> {product.subcategoriesgoods}*/}

      {/* <ModalWnd call={modalState} onDestroy={()=> setModalState(false)} />
            <button onClick={()=> setModalState(true)} className='btn-buyGoods'><Link to="/buy">Купити</Link></button> */}


      
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
      <hr></hr>
      {activeTab === 'Опис' && (
        <>
          <table>
            {/* Ваш існуючий вміст для вкладки "Опис" */}
          </table>
          <p>{product.short_discription}</p>
        </>
      )}

      {activeTab === 'Характеристика' && (
        <>
          <p>Властивості</p>
        </>
      )}
      {activeTab === 'Коментарі' && (
        <>
          <p><Link to="/comments">Коментарі</Link></p>
        </>
      )}


    </div>
  );
}

// import { Helmet } from 'react-helmet-async';
// const [pageTitle, setPageTitle] = useState('Заголовок за замовчуванням');

//   useEffect(() => {
//     // Визначаємо поточний маршрут
//     const currentPath = window.location.pathname;

//     if (currentPath === '/') {
//       setPageTitle('Головна сторінка');
//     } else if (currentPath === '/about') {
//       setPageTitle('Про нас');
//     } else if (currentPath === '/goods') {
//       setPageTitle('Товари');
//     }
//   }, []);<Helmet>
//   <title>{pageTitle}</title>
// </Helmet>