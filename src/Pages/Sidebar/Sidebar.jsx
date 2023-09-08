import './Sidebar.css';
import { NavLink } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
function Sidebar() {

    const [subcategories, setSubcategories] = useState([]);
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        // Симулюємо отримання списку товарів з сервера або API
        axios.get('http://localhost:8080/subcategoriesGoods')
            .then((response) => setSubcategories(response.data))
            .catch((error) => console.log(error));
        axios.get('http://localhost:8080/categoriesGoods')
            .then((response) => setCategories(response.data))
            .catch((error) => console.log(error));
    }, []);
    console.log(categories);
    return (
        <div className="Sidebar">
            <nav>
                <ul>
                    <li>
                        <NavLink to="/users">Користувачі</NavLink>
                    </li>
                    <li>
                        <NavLink to="/photos">Фото</NavLink>
                    </li>
                    <li>
                        <NavLink to="/posts">Пости</NavLink>
                    </li>
                    <li>
                        <NavLink to="/comments">Коментарі</NavLink>
                    </li>
                    <li>
                        <NavLink to="/goods">Товари</NavLink>
                    </li>
                    <li>
                        <NavLink to="/categoriesGoods">Категорії</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">Про нас</NavLink>
                    </li>
                </ul>
            </nav>
            <hr></hr>
            <h3>Субкатегорії</h3>
                <ul>
                    {/* фільтрація товарів по віповідній категорії чи субкатегорії */}
            {subcategories.map((subcategory) => (
                    <li key={subcategory.id}><NavLink to="">{subcategory.name}</NavLink></li>
                    
                    ))}
                </ul>
            <hr></hr>
            <h3>Категорії</h3>
            <ul>
                {categories.map((category) => (
                    <li key={category.id}>
                        <NavLink to={`/categoriesGoods/${category.id}`}>{category.name}</NavLink>
                    </li>
                ))}
            </ul>

        </div>
    );
}

export default Sidebar;