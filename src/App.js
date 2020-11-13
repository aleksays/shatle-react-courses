import { useState } from 'react';
import { createPortal } from 'react-dom';
import Dropdown from './components/dropdown';
import Box from './components/common/box';
import Button from './components/common/button';
import Accordeon from './components/accordeon';
import useModal from './hooks/useModal';
import PortalModal from './components/common/modal/portal-modal';
import accordeonList from './data/accordeonList.json';
import FormModal from './components/form-modal';
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
  const [isPortalModal, setIsPortalModal] = useState(false);
  const { showModal } = useModal();

  function handleChange(event, setState) {
    setState(event.target.value);
  }

  function openModal() {
    showModal(FormModal, { title: 'Form Modal', size: 'small' });
  }

  function togglePortalModal() {
    setIsPortalModal(!isPortalModal);
  }

  return (
  <div className="App">
    <Box title="Dropdown component">
      <Dropdown
        list={list}
      />
    </Box>

    <Box title="Modal using context">
      <div style={{ display: 'flex', justifyContent: 'space-around'}}>
        <Button onClick={openModal}>Open Context Modal</Button>
        <Button onClick={togglePortalModal}>Open Portal Modal</Button>
      </div>
      {isPortalModal && (
        createPortal(
          <PortalModal title="Portal modal" onHide={togglePortalModal} size="small">
            I am Portal Modal
          </PortalModal>,
          document.getElementById('portal')
        )
      )}
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
  </div>
  );
}

export default App;
