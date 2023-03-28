import React, { useState } from 'react';
import './App.css';

function App() {
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    setResult(result + value);
  }

  const handleClear = () => {
    setResult('');
  }

  const handleEquals = () => {
    try {
      const evaluated = eval(result);
      setResult(evaluated.toString());
    } catch (error) {
      setResult('Invalid expression');
    }
  }

  return (
    <div className="calculator">
      <div className="display">{result}</div>
      <button onClick={() => handleClick('1')}>1</button>
      <button onClick={() => handleClick('2')}>2</button>
      <button onClick={() => handleClick('3')}>3</button>
      <button onClick={() => handleClick('+')}>+</button>
      <button onClick={() => handleClick('4')}>4</button>
      <button onClick={() => handleClick('5')}>5</button>
      <button onClick={() => handleClick('6')}>6</button>
      <button onClick={() => handleClick('-')}>-</button>
      <button onClick={() => handleClick('7')}>7</button>
      <button onClick={() => handleClick('8')}>8</button>
      <button onClick={() => handleClick('9')}>9</button>
      <button onClick={() => handleClick('*')}>*</button>
      <button onClick={() => handleClear()}>C</button>
      <button onClick={() => handleClick('0')}>0</button>
      <button onClick={() => handleClick('/')}>/</button>
      <button onClick={() => handleEquals()}>=</button>
    </div>
  );
}

export default App;