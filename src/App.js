import { useState } from 'react';
import Dropdown from './components/dropdown';
import Box from './components/common/box';
import Accordeon from './components/accordeon';
import accordeonList from './data/accordeonList.json';
import Counter from './components/counter';
import styles from './styles.module.css';
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
  const [title, setTitle] = useState('React is Awesome');
  const [size, setSize] = useState(sizes[1]);

  function handleChange(event, setState) {
    setState(event.target.value);
  }

  return (
  <div className="App">
    <Box title="Dropdown component">
      <Dropdown
        list={list}
      />
    </Box>

    <Box title="Css Modules">
      <div className={styles.somediv}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum a aut consectetur. Distinctio nesciunt aperiam aliquam, eius reiciendis praesentium architecto sit, in odit modi vero?
      </div>
    </Box>

    <Box title="Accordeon">
      <div className="accordeon-toolbar">
        <div className="picker">
          {colors.map((colorName, index) => (
            <button
              key={`${colorName}-${String(index)}`}
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
        <label>
            Title:
            <div>
              <input type="text" onChange={(e) => handleChange(e, setTitle)} value={title} />
            </div>
        </label>
        <label className="size-select">
            Size: 
            <select name="accordeonSize" onChange={(e) => handleChange(e, setSize)} className="select">
              {sizes.map((sizeName, index) => (
                <option key={`${sizeName}-${String(index)}`} value={sizeName}>{sizeName}</option>
              ))}
            </select>
        </label>
      </div>
      <Accordeon
        list={accordeonList}
        title={title}
        color={color}
        size={size}
      />
    </Box>
    <Box title="Counter">
      <Counter />
    </Box>
  </div>
  );
}

export default App;
