import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [width, setwidth] = useState(window.innerWidth);
  const [height, setheight] = useState(window.innerHeight);

  const CambiarTamano = () =>{
    setwidth(window.innerWidth);
    setheight(window.innerHeight)
  }
  useEffect (() =>{
    window.addEventListener('resize', CambiarTamano)

    return () =>{
      window.removeEventListener('resize', CambiarTamano)
    }
  })
  return (
    <div className="App">
      <br/>
      <p>Width : {width} px</p>
      <p>Width : {width} px</p>
    </div>
  );
}

export default App;
