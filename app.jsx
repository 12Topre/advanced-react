import React, { useState } from 'react';
import './App.css';
import ResultView from './ResultView';
import InputView from './InputView';

function App() {
  const [result, setResult] = useState('');

  const handleInputClick = (value) => {
    setResult(result + value);
  }

  return (
    <div className="calculator">
      <ResultView result={result} />
      <InputView onInputClick={handleInputClick} />
    </div>
  );
}

export default App;
