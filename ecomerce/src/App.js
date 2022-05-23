import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemLIstContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <ItemLIstContainer greeting="Hola Bebes" />
      </header>
    </div>
  );
}

export default App;
