import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartView from './components/CartView';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar brand="Dani Nuts" />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/detail" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<CartView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
