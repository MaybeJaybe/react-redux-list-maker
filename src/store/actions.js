export const ADD_ITEM = "ADD_ITEM"
export const CHECK_ITEM = "CHECK_ITEM"
export const REMOVE_ITEM = "REMOVE_ITEM"
export const CLEAR_ALL = "CLEAR_ALL"

export const addItem = (data) => {
  return {
    type: ADD_ITEM,
    payload: data
  }
}

export const checkItem = (data) => {
  return {
    type: CHECK_ITEM,
    payload: data
  }
}

export const removeItem = (data) => {
  return {
    type: REMOVE_ITEM,
    payload: data
  }
}

export const clearAll = () => {
  return {
    type: CLEAR_ALL
  }
}