import React from 'react';
import { NavBar } from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { CarritoProvider } from './context/CarritoContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { Cart } from './components/Cart/Cart';
import { Checkout } from './components/Checkout/Checkout';
import { Footer } from './components/Footer/Footer';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <CarritoProvider>
         <NavBar/>
          <Routes>
            <Route path='/' element={ <ItemListContainer /> } />
            <Route path='/categoria/:idCategoria' element={ <ItemListContainer /> } />
            <Route path='/item/:idItem' element={ <ItemDetailContainer /> } />
            <Route path='/cart' element= { <Cart/> } />
            <Route path='/checkout' element= { <Checkout/> } />
          </Routes>
          <Footer/>
        </CarritoProvider>
      </BrowserRouter>
    </>
  )
}

export default App
