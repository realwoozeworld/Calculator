import React, { useState } from 'react';

function Calculator() {
  const [input, setInput] = useState('');

  const handleClick = (e) => {
    setInput(input + e.target.value);
  };

  const handleCalculate = () => {
    // eslint-disable-next-line no-eval
    setInput(eval(input).toString());
  };

  const handleClear = () => {
    setInput('');
  };

  return (
    <div>
      <input type="text" value={input} />
      <div>
        <button value="7" onClick={handleClick}>7</button>
        <button value="8" onClick={handleClick}>8</button>
        <button value="9" onClick={handleClick}>9</button>
        <button value="/" onClick={handleClick}>/</button>
      </div>
      <div>
        <button value="4" onClick={handleClick}>4</button>
        <button value="5" onClick={handleClick}>5</button>
        <button value="6" onClick={handleClick}>6</button>
        <button value="*" onClick={handleClick}>*</button>
      </div>
      <div>
        <button value="1" onClick={handleClick}>1</button>
        <button value="2" onClick={handleClick}>2</button>
        <button value="3" onClick={handleClick}>3</button>
        <button value="-" onClick={handleClick}>-</button>
      </div>
      <div>
        <button value="0" onClick={handleClick}>0</button>
        <button value="." onClick={handleClick}>.</button>
        <button value="=" onClick={handleCalculate}>=</button>
        <button value="+" onClick={handleClick}>+</button>
      </div>
      <button onClick={handleClear}>Clear</button>
    </div>
  );
}

export default Calculator;