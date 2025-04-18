import {
  useState,
  useRef
} from "react"; 
import "./App.css";

function App() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0); 
 
  function plus(e) { 
    e.preventDefault(); 
    setResult((result) => result + Number(inputRef.current.value)); 
  }; 
 
  function minus(e) { 
  	// Add the code for the minus function 
    e.preventDefault()
    setResult((result) => result - Number(inputRef.current.value))
  };
 
  function times(e) { 
    // Add the code for the plus function 
    e.preventDefault()
    setResult((result) => result * Number(inputRef.current.value))
  }; 
 
  function divide(e) { 
    // Add the code for the divide function 
    e.preventDefault()
    setResult((result) => result / Number(inputRef.current.value))
  };
 
  function resetInput(e) { 
    e.preventDefault();
    inputRef.current.value = "";
  }; 
 
  function resetResult(e) { 
  	// Add the code for the resetResult function 
    e.preventDefault()
    setResult(0)
  }; 
 
  return ( 
    <div className="App"> 
      <div> 
        <h1>Simplest Working Calculator</h1> 
      </div> 
      <form> 
        <p ref={resultRef}> 
          Current result: {result}
        </p> 
        <input
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
        /> 
        <div className="button-row">
          <button onClick={plus}>+</button>
          <button onClick={minus}>-</button>
        </div>
        <div className="button-row">
          <button onClick={times}>*</button>
          <button onClick={divide}>÷</button>
        </div>
        <div className="button-row">
          <button className="reset" onClick={resetInput}>Reset Input</button>
          <button className="reset" onClick={resetResult}>Reset Result</button>
       </div>
      </form> 
    </div> 
  ); 
} 
 
export default App; 
