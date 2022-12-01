import './App.css';
import NavBar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';

/*BOOSTRAP */
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="app">
      <header>
        <NavBar/>
      </header>
      <main>
        <ItemListContainer greeting='Bienvenidos a MDQ Bebidas!'/>
      </main>
    </div>
  );
}

export default App;
