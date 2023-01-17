import './App.css';
import NavBar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
/*BOOSTRAP */
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import CartWidget from './components/CartWidget';
import {db} from './db/firebase-config';
import Cart from './components/Cart';
import { useEffect, useState } from 'react';
import {collection, getDocs} from 'firebase/firestore';

function App() {
  const [cartLength, setcartLength] = useState(0);
  const [drinks, setDrinks] = useState([]);
  const collectionRef = collection(db, 'Items');

  async function getProducts(){
    const data = await getDocs(collectionRef);
    setDrinks(data.docs.map(doc => ({...doc.data(), id: doc.id})));
  }

  useEffect(() => {
    getProducts();
  },[])

  return (
    <div className="app">
      <header>
        <NavBar drinks={drinks} cartLength={cartLength}/>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<ItemListContainer drinks={drinks}/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer drinks={drinks}/>}/>
          <Route path='/item/:itemId' element={<ItemDetailContainer drinks={drinks}/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
