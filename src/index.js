import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';

// const initialState = 0;

const reducer = (state = 1, action) => {
  switch (action.type) {
    case 'INC':
      return state + 1;
    case 'DEC': 
      return state - 1;
    case 'RND': 
      return state * action.payload;
    default:
      return state;
  }
}

const store = createStore(reducer);

const update = () => {
  document.getElementById('counter').textContent = store.getState();
}
store.subscribe(update);

document.getElementById('inc').addEventListener('click', () => {
  store.dispatch({type: 'INC'});
})

document.getElementById('dec').addEventListener('click', () => {
  store.dispatch({type: 'DEC'});
})

document.getElementById('rnd').addEventListener('click', () => {
  const value = Math.floor(Math.random() * 11);
  store.dispatch({type: 'RND', payload: value});
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  
  </>
);

