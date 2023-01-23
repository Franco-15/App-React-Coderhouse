import './App.css';
import NavBar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
/*BOOSTRAP */
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Cart from './components/Cart';
import AppContextProvider from './context/AppContext';

function App() {

  return (
    <div className="app">
        <AppContextProvider>
          <header>
            <NavBar/>
          </header>
          <main>
            <Routes>
              <Route path='/' element={<ItemListContainer />} />
              <Route path='/category/:categoryId' element={<ItemListContainer />} />
              <Route path='/item/:itemId' element={<ItemDetailContainer />} />
              <Route path='/cart' element={<Cart />} />
            </Routes>
          </main>
        </AppContextProvider>
    </div>
  );
}
export default App;
