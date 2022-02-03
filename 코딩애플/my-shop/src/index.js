import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, HashRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

let 기본state = [];

function reducer(state = 기본state, action) {
  if (action.type === '항목추가') {
    let copy = [...state];
    let same;

    same = copy.find(e => e.id == action.payload.id);
    if (same)
      same.quantity++;
    else
      copy.push(action.payload);
    return copy;
  }
  else if (action.type === '항목제거') {
    return ;
  }
  else if ( action.type === '수량증가' ) {
    let copy = [...state];
    let item;

    item = copy.map((a, i) => {
      if (a.id == action.payload) {
        a.quantity++;
      }
      return a;
    });
    return item;
  }
  else if (action.type === '수량감소') {
      let copy = [...state];
      let item;

      item = copy.map((a, i) => {
        if (a.id == action.payload) {
          if (a.quantity > 0)
            a.quantity--;
        }
        return a;
      });
      return item;
  }
  else return state;
}

let store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
     <Provider store={ store }>
      <App />
     </Provider>
    </BrowserRouter>
    {/* <HashRouter>
      <App />
    </HashRouter> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
