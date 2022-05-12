import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './store/reducer';
import { loadState, saveState } from './store/localStorage';
import Header from './Header';
import MakeList from './MakeList';
import List from './List';
import './App.css';

const loadedState = loadState();
const store = createStore(reducer, loadedState);
store.subscribe(() => {
  saveState(store.getState());
})

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <MakeList />
        <List />
      </div>
    </Provider>
  );
}

export default App;
