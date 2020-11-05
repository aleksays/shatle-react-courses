import Dropdown from './components/dropdown';
import './App.css';

const list = [
  'Report',
  'Change Name',
  'Clear',
];

const anotherList = [
  'Increment',
  'Decrement',
  'Clear',
];

function App() {
  return (
    <div className="App">
      <h3>Dropdown component</h3>
      <Dropdown
        list={anotherList}
      />
    </div>
  );
}

export default App;
