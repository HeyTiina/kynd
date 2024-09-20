import './App.css';
import Philosoph from './Philosoph';
import Hero from "./Hero";
import Catering from './Catering';
import Menu from "./Menu";
import Footer from "./Footer";



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hero />
        <Philosoph />
        <Catering />
        <Menu />
        <Footer />
      </header>
    </div>
  );
}

export default App;
