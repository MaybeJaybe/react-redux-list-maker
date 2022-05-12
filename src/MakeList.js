import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './store/actions';
import './MakeList.css';

export default function MakeList() {
  const dispatch = useDispatch();
  const [input, setInput] = useState('');

  const handleSubmit = () => {
    dispatch(addItem(input));
    setInput('');
  };

  return (
    <div className="make-container">
      <div className="make-list">
        <input 
          className="make-input"
          placeholder="Add item" 
          value={input} 
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="add-button" onClick={handleSubmit}>
          Add
        </button>
      </div>
    </div>
  )
}