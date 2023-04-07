import { useState } from "react";
import "./App.css";
import Dropbar from "./components/Dropbar";
import Dropbart from "./components/Dropbart";
import Navbar from "./components/Navbar";
import Videoposter from "./components/Videoposter";
import Vidcrsl from "./components/Vidcrsl";

function App() {
  const [val, setVal] = useState(false);
  const [val1, setVal1] = useState(false);

  let ishoverval = (res) => {
    setVal(res);
  };
  let ishoverval1 = (res) => {
    setVal1(res);
  };
  return (
    <div className="App">
      <div className="nav">
        <Navbar ishr={ishoverval} ishr1={ishoverval1} />
        <Dropbar val={val} />
        <Dropbart val1={val1} />
      </div>
      <div>
        <Videoposter />
      </div>
      <div>
        <Vidcrsl />
      </div>
    </div>
  );
}

export default App;
