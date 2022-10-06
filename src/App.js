import React from 'react'
import './App.css';
import Navbar from './components/navbar/Navbar'
import ItemListContainer from './components/ItemListConteiner/ItemListContainer';
import ItemDetailConteiner from './components/ItemDetailConteiner/ItemDetailConteiner';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/'element={<ItemListContainer/>}/>
        <Route path='/category/:categoryId' element={<ItemDetailConteiner />}/>
        <Route path='/detail/:producId' element={<ItemDetailConteiner />}/>
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
