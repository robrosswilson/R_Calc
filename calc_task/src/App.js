import { useState } from 'react';
import './App.css';
import { evaluate } from 'mathjs';

const App = () => {

  const calcKeys = ['0', '1' , '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '=', 'c']

  const [calculation, setCalculation] = useState('')

  const addToCalc = (keyUsed) => {
    if (keyUsed === '='){ 
      let x = calculation
      setCalculation(evaluate(x))
    }
    else if (keyUsed === 'c'){
      setCalculation('')
    }
    else{
      setCalculation(calculation + keyUsed)
    }}
 
  return (
    <div className="App">

      <h1>Calculator</h1>

      <h2>{calculation}</h2>

      {calcKeys.map((keyUsed, index) => {

        return <button key={index} label={keyUsed} onClick={() => addToCalc(keyUsed)}>{keyUsed}</button>

      })}


    </div>
  
  );
}


export default App;