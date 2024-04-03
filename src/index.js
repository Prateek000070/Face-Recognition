import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {add,sub,mul,div} from "./components/Calculator";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <ul>
      <li>Sum of two number is {add(40,4)}</li>
      <li>Sub of two number is {sub(40,4)}</li>
      <li>Mul of two number is {mul(40,4)}</li>
      <li>Div of two number is {div(40,4)}</li>
    </ul>
  </>
);

