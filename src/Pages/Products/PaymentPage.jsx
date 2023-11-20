import React, { useState } from 'react';
import '../../';

export default function PaymentPage() {
  const [formData, setFormData] = useState({
    customers: '',
    paymentsType: '',
    deliveriesMethod: '',
    address_delivery: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Тут ви можете відправити дані на сервер або виконати інші дії з формою
    //put запит до таблиці ordersList
  };

  return (
    <form className="payment-form" onSubmit={handleSubmit}>
         <h1>Сторінка оплати</h1>
      <div>
        <label>Ім'я клієнта:</label>
        <input
          type="text"
          name="customers"
          value={formData.customers}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Тип оплати:</label>
        <select
          name="paymentsType"
          value={formData.paymentsType}
          onChange={handleChange}
        >
          <option value="">Оберіть тип оплати</option>
          {/* Додайте варіанти для різних типів оплати */}
        </select>
      </div>
      <div>
        <label>Метод доставки:</label>
        <select
          name="deliveriesMethod"
          value={formData.deliveriesMethod}
          onChange={handleChange}
        >
          <option value="">Оберіть метод доставки</option>
          {/* Додайте варіанти для різних методів доставки */}
        </select>
      </div>
      <div>
        <label>Адреса доставки:</label>
        <input
          type="text"
          name="address_delivery"
          value={formData.address_delivery}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Здійснити оплату</button>
      {/* на електронну пошту відправити лист переліком товарів і сумою,тип оплати тип доставки адреса */}
    </form>
  );
}
