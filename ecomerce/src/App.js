import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemLIstContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <ItemLIstContainer greeting="Hola Bebes" />
        <ItemCount />
      </header>
    </div>
  );
}

export default App;
