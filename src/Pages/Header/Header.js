import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="Header">
      <ul>
        <li><Link to='/'><h1>Головна</h1></Link></li>
        <li><Link to="/users"><h1>Users</h1></Link></li>
        <li><Link to="/goods"><h1>Товари</h1></Link></li>
        <li><Link to="/about"><h1>Про маркетплейс</h1></Link></li>
        <li>
          <form className="nav">
            <input type="text" placeholder="Пошук..." />
            <button type="submit">Знайти</button>
          </form></li>
      </ul>

    </div>
  );
}

export default Header;









// {/* <Link to='/'>
//                 <h1>Головна</h1>
//             </Link>
//             <Link to="/about">
//                 <h1></h1>
//             </Link> */}
//             {/* <ul>
//                     <li>
//                         <NavLink to="/statehooks">Built-in React Hooks</NavLink>
//                     </li>
//                     <li>
//                         <NavLink to="/community">Community</NavLink>
//                     </li>
//                     <li> 
//                         <NavLink to="/resources">Resources</NavLink>
//                     </li>   
//                     <li>
//                         <NavLink to="/about">About</NavLink>
//                     </li>
//                     <li>
//                         <NavLink to="/users">Users</NavLink>
//                     </li>
//                     <li>
//                         <NavLink to="/products/:productId">Карта товару</NavLink>
//                     </li>
//                     <li>
//                         <NavLink to="/products">Товари</NavLink>
//                     </li>
//                 </ul> */}
//             {/* <nav class="nav">
//                 <ul>
//                     <li>
//                         <NavLink to="/statehooks">Built-in React Hooks</NavLink>
//                     </li>
//                     <li>
//                         <NavLink to="/community">Community</NavLink>
//                     </li>
//                     <li> 
//                         <NavLink to="/resources">Resources</NavLink>
//                     </li>   
//                     <li>
//                         <NavLink to="/about">About</NavLink>
//                     </li>
//                     <li>
//                         <NavLink to="/users">Users</NavLink>
//                     </li>
//                     <li>
//                         <NavLink to="/products/:productId">Карта товару</NavLink>
//                     </li>
//                     <li>
//                         <NavLink to="/products">Товари</NavLink>
//                     </li>
//                     <li class="menu2"><a href="#">Фрукти</a>
//                         <ul class="podmenu2">
//                             <li><a href="#">Апельсин</a></li>
//                             <li><a href="#">Ананас</a></li>
//                             <li><a href="#">Банан</a></li>
//                             <li><a href="#">Яблуко</a></li>
//                             <li><a href="#">Мандарин</a></li>
//                         </ul>
//                     </li>
//                     <li class="menu2"><a href="#">Овочі</a>
//                         <ul class="podmenu2">
//                             <li><a href="#">Картопля</a></li>
//                             <li><a href="#">Огірок</a></li>
//                             <li><a href="#">Буряк</a></li>
//                             <li><a href="#">Морква</a></li>
//                         </ul>
//                     </li>
//                     <li class="menu2"><a href="#">Ягоди</a>
//                         <ul class="podmenu2">
//                             <li><a href="#">Полуниця</a></li>
//                             <li><a href="#">Суниця</a></li>
//                             <li><a href="#">Смородина</a></li>
//                         </ul>
//                     </li>
//                 </ul>
//             </nav> */}