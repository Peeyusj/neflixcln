import { useState,useRef,useEffect } from "react";
import "./App.css";
import Dropbar from "./components/Dropbar";
import Dropbart from "./components/Dropbart";
import Navbar from "./components/Navbar";
import Videoposter from "./components/Videoposter";
import Vidcrsl from "./components/Vidcrsl";
import { BrowserRouter,Route,Routes,useLocation } from "react-router-dom";
import { Mylist } from "./components/Mylist";
import { Videoplayer } from "./components/Videoplayer";


function App() {
  const [val, setVal] = useState(false);
  const [val1, setVal1] = useState(false);
  const [path, setPath] = useState(false);
let pathfn=(res)=>{
setPath(res)
}
  let ishoverval = (res) => {
    setVal(res);
  };
  let ishoverval1 = (res) => {
    setVal1(res);
  };
  console.log(path);

  return (
 

    <BrowserRouter>
    <div  className={`${path=="/videoplayer"?"App1":"App"}`}>
      
      <div className="nav">
        <Navbar ishr={ishoverval} ishr1={ishoverval1} />
        <Dropbar val={val} />
        <Dropbart val1={val1} />
      </div>
      <Routes>
        <Route path="/" element={
          <div>
          <Videoposter/>
          <Vidcrsl/>
        </div>
        }/>
        <Route path="/mylist" element={<Mylist/>}/>
        <Route path="/videoplayer" element={<Videoplayer pathfn={pathfn}/>}/>
   

        
      </Routes>
      
    </div>
    </BrowserRouter>

  );
}

export default App;
