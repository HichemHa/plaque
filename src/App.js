import logo from './logo.svg';
import './App.css';
import Navigation from './componentVue/Navigation';
import Plaque from './componentVue/Plaque';

function App() {
  return (
    <div className="App">
      <header className="Container">
        <Navigation />
      </header>
      <main>
        <Plaque/>
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
