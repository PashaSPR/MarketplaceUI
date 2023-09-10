import './ModalWnd.css';
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function ModalWnd({ call, onDestroy }) {

    const [product, setProduct] = useState(null);
    //const productInOrder=
    const { id } = useParams();
    console.log(product);

    useEffect(() => {
        // Запит до API для отримання даних про користувача за id
        fetch(`http://localhost:8080/goods/getOne?id=${id}`)
            .then((response) => response.json())
            .then((data) => setProduct(data))
            .catch((error) => console.log(error));
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
                <hr></hr>
                <div className="btns">
                    <table>
                        <tr>
                            <td><h2>{product.name}</h2></td>
                            <td><button >Видалити</button></td>
                        </tr>
                        <tr>
                            <td>
                                <img src={product.photosGoodsDTOS[0].path} alt={product.name}></img>
                            </td>
                            <td>
                                <tr>


                                </tr>
                                <tr>
                                    <td><td><h3>Кількість: </h3></td>
                                        <h3>Сума: {product.price}</h3>
                                    </td>
                                    <td >
                                        <input type='number' id='number' min={1} size='50' />
                                        {/* <p type='text'  readOnly >value={product.id}</p> */}
                                        <input type='text' id='number' value={product.id} readOnly />
                                    </td>
                                </tr>

                                <Link to='/payment'><button className='accept'>До оплати</button></Link>{/*input method='post' */}
                                <button onClick={onDestroy} className='reject'>Переглянути товар</button>
                            </td>
                        </tr>

                    </table>


                </div>
            </div>
        </div>
    );
}