import { useState } from 'react';
import './App.css';
import { evaluate } from 'mathjs';

const App = () => {

  const calcKeys = ['0', '1' , '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '=', 'AC']

  const [calculation, setCalculation] = useState('')

  const addToCalc = (keyUsed) => {
    if (keyUsed === '='){ 
      let x = calculation

      // evaluate takes the string created and produces an answer
      setCalculation(evaluate(x))
    }
    else if (keyUsed === 'AC'){
      setCalculation('')
    }
    else{
      setCalculation(calculation + keyUsed)
    }}
 
  return (
    <div className="calculator">

      <h1 className="title">Calculator</h1>

      <div className="calculator-screen">
        <h2>{calculation}</h2>
      </div>

      <div className="calculator-buttons">
        {calcKeys.map((keyUsed, index) => {

          return <button className="Button" key={index} label={keyUsed} onClick={() => addToCalc(keyUsed)}>{keyUsed}</button>

        })}
      </div>


    </div>
  
  );
}


export default App;