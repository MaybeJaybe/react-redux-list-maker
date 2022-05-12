import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkItem, removeItem } from "./store/actions";
import './List.css';

export default function List() {
  const dispatch = useDispatch();
  const items = useSelector(state => state.items);
  items.sort((a, b) => {
    if (a.checked == true) {
      return 1;
    } 
    return -1;
  })

  const checkmark = index => {
    dispatch(checkItem(index));
  };

  const deleteItem = index => {
    dispatch(removeItem(index));
  };

  const listItems = items.map((item, index) => {
    return (
      <div>
        <div className="list-input">
          <label className='list-label'>
            <input type='checkbox' checked={item.checked} key={index} onClick={() => checkmark(index)}/>
            <span className='checkmark'></span>
            {item.value}
          </label>
          <button className='remove-button' key={index} onClick={() => deleteItem(index)}>Remove</button>
        </div>
      </div>
    )
  })
  return (
    <div className="list-container">
      {listItems}
    </div>
  )
}