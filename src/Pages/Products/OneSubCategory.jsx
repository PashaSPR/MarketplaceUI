import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import '../../global.css';
import axios from 'axios';

export default function OneSubCategory()
{
  const { subCategoryId } = useParams();
  const [subCategory, setSubCategory] = useState(null);
// console.log(subCategoryId);
  useEffect(() => {
    // Отримання списку товарів певної субкатегорії
    axios.get(`http://localhost:8080/subcategoriesGoods/getOne?id=${subCategoryId}`)
      .then(response => setSubCategory(response.data))
      .catch(error => console.log(error));
  }, [subCategoryId]);
  console.log(subCategory);
  if (!subCategory) {
    return <div>Loading...</div>; // Або можна показати попередження або помилку
  }
  return (
    <div className="Main">
      <h1>Товари в категорії \\{subCategory.name}\\</h1>
      {/* {subCategory.map((goods) => (
            <h1>{goods.name}</h1>
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
          ))} */}
        <div>
          
          <p>ID: {subCategory.id}</p>
          {/* Додайте інші поля товару, які вам потрібні */}
        </div>
      
    </div>
  );
}