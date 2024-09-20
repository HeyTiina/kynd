import './App.css';
import Philosoph from './Philosoph';
import Hero from "./Hero";
import Catering from './Catering';
import Menu from "./Menu";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hero />
        <Philosoph />
        <Catering />
        <Menu />
      </header>
    </div>
  );
}

export default App;
