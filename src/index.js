import ReactDOM from 'react-dom/client';
import React from 'react';
import Header from './Pages/Header/Header';
import Sidebar from './Pages/Sidebar/Sidebar';
import Welcome from './Pages/Welcome/Welcome';
import About from './Pages/About/About';
import ErrorPage from './Pages/Error/Error';
import Users from './Pages/Users/Users';
import Comments from './Pages/Users/Comments';
import Posts from './Pages/Users/Posts';
import Photos from './Pages/Users/Photos';
import UserPage from './Pages/Users/UserPage';
import ProductDetails from './Pages/Products/ProductDetails';
import ProductList from './Pages/Products/ProductList';
import Categories from './Pages/Products/Categories';
import SubCategories from './Pages/Products/SubCategories';
import OneCategory from './Pages/Products/OneCategory';
import OneSubCategory from './Pages/Products/OneSubCategory';
import PaymentPage from './Pages/Products/PaymentPage';
import './global.css';

import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route,
    Outlet
} from 'react-router-dom';

const Root = () => {
    return (
        <div className='container'>
            
            <Header />
            <Outlet />
            <Sidebar />
        </div>
    );
}

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={ <Root /> } >
            <Route index element ={ <Welcome /> } />
            <Route path='about' element={ <About /> } />
            <Route path='users' element={<Users/>} />
            <Route path="users/:userId" element={<UserPage />}  />
            {/* <Route path='goods' element={<ProductList/>} />
            <Route path='goods/:id'  element={<ProductDetails/>} /> */}
            {/* <Route path='goodsOrders' element={<ProductList/>} />
            <Route path='goodsOrders/:id'  element={<ProductDetails/>} /> */}
            <Route path='goodsInvoices' element={<ProductList/>} />
            <Route path='goodsInvoices/:id'  element={<ProductDetails/>} />
            <Route path='comments'  element={<Comments/>} />
            <Route path='subcategoriesGoods'  element={<SubCategories/>} />
            <Route path='subcategoriesGoods/:subCategoryId'  element={<OneSubCategory/>} />
            <Route path='categoriesGoods'  element={<Categories/>} />
            <Route path='categoriesGoods/:categoryId'  element={<OneCategory/>} />
            <Route path='photos'  element={<Photos/>} />
            <Route path='posts'  element={<Posts/>} />
            <Route path='payment' element={<PaymentPage />} />
            
            {/* <Route path='users/:userId' loader={loader} element={<UserPage />} errorElement={<ErrorPage/>} /> */}
            {/* <Route path="/users/:userId" render={({ match }) => <UserPage userId={match.params.userId} />} /> */}
            <Route path='*' element={ <ErrorPage /> } />
            
        </Route> 
    )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);
