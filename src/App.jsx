import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ProductList from './Module/Common/ProductList';
import Cart from './Module/User/Cart';
import EditProduct from './Module/Admin/EditProduct';
import AddProduct from './Module/Admin/AddProduct';
import Profile from './Module/Common/Profile';
import Login from './Module/Common/Login';
import Register from './Module/User/Register';
import Orders from './Module/Admin/Orders';
import OrderViewPage from './Module/Admin/OrderViewPage';
import ProductPage from './Module/User/ProductPage';
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/signin" element={<Login />} />
    <Route path="/signup" element={<Register />} />
    <Route path="/" element={<ProductList />} />
    <Route path="/productsadmin" element={<ProductList />} />
    <Route path="/cart" element={<Cart/>}/>
    <Route path="/editproduct/:id" element={<EditProduct/>}/>
    <Route path="/addproduct" element={<AddProduct/>} />
    <Route path="/product/:id" element={<ProductPage/>} />
    <Route path="/profile" element={<Profile/>} />
    <Route path="/orders" element={<Orders/>} />
    <Route path="/order/:id" element={<OrderViewPage/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App