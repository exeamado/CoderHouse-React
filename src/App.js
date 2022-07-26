import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/navbar/';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <button className="btn btn-primary btn-success">Exito! </button>
      <header>
        <h1>Tierra Santa Shop</h1>
      </header>
    </div>

  );
}

export default App;
