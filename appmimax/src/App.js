import React from 'react'
import './App.css';
import ItemListContainer from './components/ItemListConteiner/ItemListContainer';
import Navbar from './components/navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div id="1" className="App">
      
      

      <Navbar />
      <ItemListContainer greeting={'Estos son nuestros productos'}/>
    </div>
  );
}

export default App;
