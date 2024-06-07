import './App.css';
import { NavBar } from './components/navbar/NavBar';
import { Hero } from './components/herosection/hero';
import { Brand } from './components/brand/brand';
import { Info } from './components/info/info';
import { Featured } from './components/featured/featured';
import { Collections } from './components/collections/collections';
function App() {
  return (
    <div className='App'>
      <NavBar></NavBar>
      <Hero></Hero>
      <div className='content'>
        <Brand></Brand>
        <Info></Info>
        <Featured></Featured>
        <Collections></Collections>
      </div>
      
    </div>
  );
}

export default App;
