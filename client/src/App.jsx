import React from 'react';
import {Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Products from './pages/Products';
import NewProduct from './pages/NewProduct';
import EditProduct from './pages/EditProduct';
import PageNotFound from './pages/PageNotFound';


const App = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/products' element={<Products/>} />
            <Route path='/new-product' element={<NewProduct/>} />
            <Route path="/edit-product/:id" element={<EditProduct />} />       
            <Route path="/*" element={<PageNotFound />} />           
        </Routes>
    </>
  )
}

export default App;
