import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemLIstContainer from './components/ItemListContainer/ItemListContainer';
import Cart from './components/Cart/Cart';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import { CartContextProvider } from './Context/CartContext';

const App = () => {
  
  return (
    <div className="App">
      <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemLIstContainer greeting="Hola Bebes" />} />
          <Route path='/category/:categoryId' element={<ItemLIstContainer greeting="Filtrados"/>} />
          <Route path='/detail/:productId' element={<ItemDetailContainer />} />
          <Route path='/about' element={<h1>about</h1>} />
          <Route path='/cart' element={<Cart />}/>
          <Route path='*' element={<h1>PAGE NOT FOUND 404</h1>} />
        </Routes>
      </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
