import './App.css';
import NavBar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

/*BOOSTRAP */
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import data from './productos.json';

function App() {
  const drinks = data;
  const categories = drinks.map((drink) => drink.tipo);
  const categoriesUnique = [...new Set(categories)];

  return (
    <div className="app">
      <header>
        <NavBar/>
      </header>
      <main>
        <h1>{'Bienvenidos a MDQ Bebidas!'}</h1>
        <Routes>
          <Route path='/' element={<ItemListContainer drinks={drinks}/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer drinks={drinks}/>}/>
          {/* <Route path='/item/:itemId' element={<ItemDetailContainer drinks={drinks}/>}/> */}
        </Routes>
      </main>
    </div>
  );
}

export default App;
