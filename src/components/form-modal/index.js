import { useState, useRef } from 'react';
import Modal from '../common/modal';
import Button from '../common/button';

export default function FormModal({ size, title}) {
  const [name, setName] = useState('');
  const [sex, setSex] = useState('');
  const inputFileRef = useRef();

  function handleSexChange(e) {
    setSex(e.target.value)
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    alert(`Name: ${name}, Sex: ${sex}, File: ${inputFileRef.current.files[0].name}`);
    e.preventDefault();
  }


  return (
    <Modal title={title} size={size}>
      <form onSubmit={handleSubmit} className="form">
        <div className="fieldbox">
          <label htmlFor="name">Name: </label>
          <input
            id="name"
            name="name"
            type="text"
            value={name}
            className="field"
            onChange={handleNameChange}
          />
        </div>
        <div className="fieldbox">
          <label htmlFor="sex">Sex: </label>
          <select name="sex" onChange={handleSexChange} id="sex" value={sex} className="field">
            <option value="">Select Sex</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="fieldbox">
          <label htmlFor="sex">File: </label>
          <input type="file" multiple ref={inputFileRef}/>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </Modal>
  );
}
