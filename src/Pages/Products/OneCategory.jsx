import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import '../../global.css';
import axios from 'axios';

export default function OneCategory() {
  const { categoryId } = useParams();
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    // Отримання списку товарів певної категорії
    axios
      .get(`http://localhost:8080/categoriesGoods/getOne?id=${categoryId}`)
      .then((response) => setCategories(response.data))
      .catch((error) => console.log(error));
  }, [categoryId]);

  if (!categories) {
    return <div>Loading...</div>;
  }

  return (
    <div className="Main">
      <h1>
        {/* ВИВЕСИ ТОВАРИ А НЕ СУБКАТЕГОРІЇ */}
        Товари в категорії <h2>{categories.name}</h2>
      </h1>
      {categories.subcategoriesGoods.length === 0 ? (
        <p>Товарів в цій категорії поки немає</p>
      ) : (
        <div>
          {categories.subcategoriesGoods.map((subcategory) => (
            // <h1>{subcategory.name}</h1>
            <div key={subcategory.id}>
          <Link to={`/subcategoriesGoods/${subcategory.id}`}> 
            <button className='btn-old'>
              <h2>{subcategory.name}</h2> 
            </button>
          </Link>
        </div>
            // <div key={goodsInvoice.id}>
            //   <Link to={`/goodsInvoices/${goodsInvoice.id}`}>
            //     <button className="btn-list">
            //       <div className="name-img">
            //         <h2>{goodsInvoice.goods.name}</h2>
            //         {goodsInvoice.goods.photosGoodsDTOS && goodsInvoice.goods.photosGoodsDTOS.length > 0 ? (
            //           <img
            //             src={goodsInvoice.goods.photosGoodsDTOS[0].path}
            //             alt={goodsInvoice.goods.photosGoodsDTOS[0].discription}
            //             onError={(e) => {
            //               e.target.src =
            //                 'https://image-thumbs.shafastatic.net/807950839_310_430';
            //             }}
            //           />
            //         ) : (
            //           <img src="https://image-thumbs.shafastatic.net/807950839_310_430" alt="Дефолтне фото" />
            //         )}
            //       </div>

            //       <div className="price">
            //         <table>
            //           <tr>
            //             <td><h1>Ціна: </h1></td>
            //             <td><h3>{goodsInvoice.price}</h3></td>
            //           </tr>
            //           <tr>
            //             <td><h1>Залишок: </h1></td>
            //             <td>
            //               <h3>{goodsInvoice.quantity}</h3>
            //             </td>
            //           </tr>
            //         </table>
            //       </div>
            //     </button>
            //   </Link>
            // </div>
          ))}
        </div>
      )}
    </div>
  );
}
