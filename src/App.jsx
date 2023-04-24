import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ProductList from './Module/User/ProductList';
import Cart from './Module/User/Cart';
import EditProduct from './Module/Admin/EditProduct';
import AddProduct from './Module/Admin/AddProduct';
import Profile from './Module/Common/Profile';
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<ProductList />} />
    <Route path="/cart" element={<Cart/>}/>
    <Route path="/editproduct/:id" element={<EditProduct/>}/>
    <Route path="/addproduct" element={<AddProduct/>} />
    <Route path="/profile" element={<Profile/>} />
    </Routes>
  </BrowserRouter>
  )
}

export default App