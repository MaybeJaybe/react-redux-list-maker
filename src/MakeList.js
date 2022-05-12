import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './store/actions';
import './MakeList.css';

export default function MakeList() {
  const dispatch = useDispatch();
  const [input, setInput] = useState('');

  const handleChange = e => {
    return setInput(e.target.value);
  };

  const handleSubmit = () => {
    dispatch(addItem(input));
    setInput('');
  };

  const handleKeypress = e => {
    if (e.keyCode === 13) {
      handleSubmit();
    }
  }

  return (
    <div className="make-container">
      <div className="make-list">
        <input 
          className="make-input"
          placeholder="Add item" 
          value={input} 
          onChange={handleChange}
          onKeyDown={handleKeypress}
        />
        <button className="add-button" onClick={handleSubmit}>
          Add
        </button>
      </div>
    </div>
  )
}