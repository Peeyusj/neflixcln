import { useState } from 'react';
import './App.css';
import Dropbar from './components/Dropbar';
import Dropbart from './components/Dropbart';
import Navbar from './components/Navbar';

function App() {
  const[val,setVal]=useState(false)
  const[val1,setVal1]=useState(false)

  let ishoverval=(res)=>{
    setVal(res)};
    let ishoverval1=(res)=>{
      setVal1(res)};
  return (
    <div className="App" style={{backgroundColor:"black"}}>
      <Navbar ishr={ishoverval} ishr1={ishoverval1} />
      <Dropbar val={val}/>
      <Dropbart val1={val1}/>
    </div>
  );
}

export default App;

