import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar brand="Dani Nuts" />
      <ItemDetailContainer />
      <ItemListContainer />
    </div>
  );
}

export default App;
