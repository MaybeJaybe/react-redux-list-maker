import { ADD_ITEM, CHECK_ITEM, REMOVE_ITEM, CLEAR_ALL } from './actions';

const initialState = {
  items: []
};

const checkedItem = (array, action) => {
  return array.map((item, index) => {
    if (index !== action.payload) {
      return item;
    }

    return {
      ...item,
      ...action.item,
      checked: !item.checked
    };
  });
};

const deleteItem = (array, action) => {
  return array.filter((item, index) => index !== action.payload);
};

// const reducer = (state = initialState, action) => {
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
    // case "ADD_ITEM":
      return {
        ...state,
        items: [
          ...state.items,
          {
            value: action.payload,
            checked: false
          }
        ]
      };
    case CHECK_ITEM:
    // case "CHECK_ITEM":
      return {
        ...state,
        items: checkedItem(state.items, action)
      };
    case REMOVE_ITEM:
    // case "REMOVE_ITEM":
      return {
        ...state,
        items: deleteItem(state.items, action)
      };
    case CLEAR_ALL:
    // case "CLEAR_ALL":
      return {
        items: []
      }
    default:
      return state;
  }
}

// export default reducer