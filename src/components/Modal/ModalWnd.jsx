import './ModalWnd.css';
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

export default function ModalWnd({ call, onDestroy }) {

    const [product, setProduct] = useState(null);
    const [goods, setGoods] = useState(null);
    //const productInOrder=
    const { id } = useParams();

    console.log(product);
    useEffect(() => {
        // Запит до API для отримання даних про користувача за id
        axios.get(`http://localhost:8080/goods/getOne?id=${id}`)
            .then(response => setProduct(response.data))
            .catch((error) => console.log(error));
        axios.get('http://localhost:8080/goods')
            .then(response => setGoods(response.data))
            .catch(error => console.log(error));
    }, [id]);
    if (!call) {
        return null;
    }
    if (!product) {
        return <div>Loading...</div>;
    }
    const closeWnd = (event) => {
        if (event.target.className === 'modal') {
            onDestroy();
        }
    }

    return (
        <div onClick={closeWnd} className='modal'>
            <div className="modal-content">
                <i onClick={onDestroy} className='close'>X</i>
                <h1>Кошик</h1>
                {/* <div className='item'></div> */}
                <hr></hr>
                <div className="btns">
                    <div className='scroll-container'>
                        <table>
                            <tr>
                                <td ><h3 >{product.name}</h3></td>
                                <td ><button className='del'>Видалити</button></td>
                            </tr>
                            <tr>
                                <td>
                                    {product && product.photosGoodsDTOS && product.photosGoodsDTOS.length > 0 && (
                                        <img src={product.photosGoodsDTOS[0].path} alt={product.name} />
                                    )}
                                </td>
                                <td>
                                    <tr>
                                        <td>
                                            <td><h3>Кількість: </h3> <h3>Сума:</h3> </td>
                                        </td>
                                        <td >
                                            <input type='number' id='number' min={1} size='50' />
                                            {/* <p type='text'  readOnly >value={product.id}</p> */}
                                            <input type='text' id='number' value={product.id} readOnly />

                                        </td>
                                    </tr>


                                    <button onClick={onDestroy} className='reject'>Переглянути товар</button>
                                </td>
                            </tr>

                        </table>
                        {goods.map(good => (

                            <table key={good.id}>
                                <tr>
                                    <td ><h3 >{good.name}</h3></td>
                                    <td ><button className='del'>Видалити</button></td>
                                </tr>
                                <tr>
                                    <td>
                                    {product && product.photosGoodsDTOS && product.photosGoodsDTOS.length > 0 && (
                                        <img src={product.photosGoodsDTOS[0].path} alt={product.name} />
                                    )}
                                    </td>
                                    <td>
                                        <tr>
                                            <td>
                                                <td><h3>Кількість: </h3> <h3>Сума:</h3> </td>
                                            </td>
                                            <td >
                                                <input type='number' id='number' min={1} size='50' />
                                                {/* <p type='text'  readOnly >value={product.id}</p> */}
                                                <input type='text' id='number' value={good.id} readOnly />

                                            </td>
                                        </tr>
                                        <button onClick={onDestroy} className='reject'>Переглянути товар</button>
                                    </td>
                                </tr>
                            </table>
                        ))}
                    </div>
                    <div className='sum'>
                        <h3>Загальна сума: <span>{product.id}</span></h3>
                        <Link to='/payment'><button className='accept'>До оплати</button></Link>{/*input method='post' */}

                    </div>
                </div>
            </div>
        </div>
    );
}