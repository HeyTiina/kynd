import './App.css';
import Philosoph from './Philosoph';
import Hero from "./Hero";
import Catering from './Catering';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hero />
        <Philosoph />
        <Catering />
      </header>
    </div>
  );
}

export default App;
