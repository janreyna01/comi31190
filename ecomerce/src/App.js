import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemLIstContainer from './components/ItemListContainer/ItemListContainer';
//import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  //const [page, setPage] = useState('list')

  return (
    <div className="App">
      <header className="App-header">
        {/*<ItemCount />*/}
      </header>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemLIstContainer greeting="Hola Bebes" />} />
          <Route path='/category/:categoryId' element={<ItemLIstContainer greeting="Filtrados"/>} />
          <Route path='/detail/:productId' element={<ItemDetailContainer />} />
          <Route path='/about' element={<h1>about</h1>} />
          <Route path='*' element={<h1>PAGE NOT FOUND 404</h1>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
