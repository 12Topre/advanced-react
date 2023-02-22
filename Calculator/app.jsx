import React, { useState } from 'react';
import InputView from './InputView';
import ResultView from './ResultView';

const App = () => {
  const [result, setResult] = useState('0');

  const handleInputChange = (text) => {
    setResult(text);
  };

  return (
    <div className="calculator-app">
      <ResultView result={result} />
      <InputView handleInputChange={handleInputChange} />
    </div>
  );
};

export default App; 