import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <ItemListContainer greeting={"Hola! Estas en Claire Clothes, tan solo ropa"}></ItemListContainer>
    </div>
  );
}

export default App;
