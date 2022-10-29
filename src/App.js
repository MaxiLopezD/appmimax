import React from 'react'
import './App.css';
import Navbar from './components/navbar/Navbar'
import ItemListContainer from './components/ItemListConteiner/ItemListContainer';
import ItemDetailConteiner from './components/ItemDetailConteiner/ItemDetailConteiner';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartContextProvider } from './Context/CartContext'
import { NotificationProvider } from './Notification/Notification';

import Cart from './components/Cart/Cart'
import CheckOut from './components/CheckOut/CheckOut'

function App() {
  return (
    <div className="App">
      <NotificationProvider>
        <CartContextProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path='/' element={<ItemListContainer greeting='Listado de todos los productos' />} />
              <Route path='/category/:categoryId' element={<ItemListContainer greeting='Listado de categoria: ' />} />
              <Route path='/detail/:productId' element={<ItemDetailConteiner />} />
              <Route path='/Cart' element={<h1>CART</h1>} />
              <Route path='/CheckOut' element={<h1>ChechOut</h1>} />
              <Route path='*' element={<h1>404 NOT FOUND</h1>} />
            </Routes>
          </BrowserRouter>
        </CartContextProvider>
      </NotificationProvider>
    </div>
  );
}

export default App;
