import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "bootstrap/dist/css/bootstrap.css"
import reportWebVitals from './reportWebVitals';
import {combineReducers , createStore} from "redux"; 
import { Provider } from 'react-redux';
import cartReducer from './ducks/Cart';
import productsReducer from './ducks/Products';
import productsData from './data/products';






const rootReducer = combineReducers({
  cart : cartReducer,
  products : productsReducer
})
let store = createStore(rootReducer,{
   products :productsData,
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store= {store}>
    <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
