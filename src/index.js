import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore, bindActionCreators } from 'redux';
import reducer from './reducer';
import * as actions from './actions';
import Counter from './Counter';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(reducer);
const { dispatch, subscribe, getState } = store;

const {inc, dec, rnd} = bindActionCreators(actions, dispatch);
const update = () => {
  root.render(
    <Counter 
      counter={getState().value} 
      inc={inc} 
      dec={dec} 
      rnd={() => {
        const value = Math.floor(Math.random() * 10);
        rnd(value);
      }}
    />
  );
}

update();
subscribe(update);

