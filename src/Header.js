import React from 'react';
import { useDispatch } from 'react-redux';
import { clearAll } from './store/actions';
import './Header.css';

export default function Header() {
  const dispatch = useDispatch();

  return (
    <div className="Header">
      <div className="nav">
        <h1>Listy</h1>
        <div className="erase-list">
          <button className="clear-button" onClick={(e) => {dispatch(clearAll())}}>
            Clear All
          </button>
        </div>
      </div>
    </div>
  )
}