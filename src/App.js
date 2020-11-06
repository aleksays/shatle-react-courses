import { useState } from 'react';
import Dropdown from './components/dropdown';
import Box from './components/common/box';
import Accordeon from './components/accordeon';
import accordeonList from './data/accordeonList.json';
import './App.css';

const list = [
  'Increment',
  'Decrement',
  'Clear',
];

const colors = ['primary', 'green', 'red', 'orange'];
const sizes = ['small', 'medium', 'large'];

function App() {
  const [color, setColor] = useState('red');
  const [size, setSize] = useState(sizes[1]);

  function handleChange(e) {
    setSize(e.target.value);
  }

  return (
  <div className="App">
    <Box title="Dropdown component">
      <Dropdown
        list={list}
      />
    </Box>

    <Box title="Accordeon">
      <div className="accordeon-toolbar">
        <div className="picker">
          {colors.map((colorName) => (
            <button
              type="button"
              className={`
                picker__item
                picker__item--${colorName}
                ${colorName === color ? 'picker__item--active' : ''}
              `}
              onClick={() => setColor(colorName)}
            />
          ))}
        </div>
        <label className="size-select">
            Size: 
            <select name="accordeonSize" onChange={handleChange} className="select">
              {sizes.map((sizeName) => (
                <option value={sizeName} selected={sizeName === size}>{sizeName}</option>
              ))}
            </select>
        </label>
      </div>
      <Accordeon
        list={accordeonList}
        title="React is Awesome"
        color={color}
        size={size}
      />
    </Box>
  </div>
  );
}

export default App;
