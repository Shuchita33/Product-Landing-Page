import './App.css';
import { NavBar } from './components/navbar/NavBar';
import { Hero } from './components/herosection/hero';
import { Brand } from './components/brand/brand';
import { Info } from './components/info/info';
function App() {
  return (
    <div className='App'>
      <NavBar></NavBar>
      <Hero></Hero>
      <div className='content'>
        <Brand></Brand>
        <Info></Info>
      </div>
      
    </div>
  );
}

export default App;
