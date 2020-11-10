import { useState, useEffect, useCallback } from 'react';
import Button from '../common/button';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('black');
  const [testState, setTestState] = useState('not tested');


  console.log('render component');

  useEffect(() => {
    document.title = `Clicked ${count} times. Current color is: ${color}`;
    console.log('render useEffect');
  }, [count, color]);

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [setCount, count]);

  const decrement = () => {
    setCount(count - 1);
  };

  const toggleColor = () => {
    const colorToSet = color === 'black' ? 'red' : 'black';
    setColor(colorToSet);
  }

  const toggleTest = () => {
    const test = testState === 'tested' ? 'not tested' : 'tested';
    setTestState(test);
  }

  return (
    <div className="wrapper">
      <h3>Functional Counter</h3>
      <div className="counter">{count}</div>
      <Button type="button" onClick={increment}>+ Increment</Button>
      <Button type="button" onClick={decrement}>- Decrement</Button>
      <h4>Color: {color}</h4>
      <Button type="button" onClick={toggleColor}>Change color</Button>
      <hr/>
      <Button type="button" onClick={toggleTest}>Test state</Button>
    </div>
  );
};

export default Counter;
