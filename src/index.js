import React from 'react';                 
import ReactDOM from 'react-dom/client';   
import { Provider } from 'react-redux';     
import store from './dataStore';          
import App from './App';                   

{/*create a root using ReactDOM.createRoot and reference the DOM element with id 'root'
*/}
const root = ReactDOM.createRoot(document.getElementById('root'));

{/*use the 'root.render()' method to render the app.
the provider component is used to pass the Redux store to the app so that it can be accessed throughout the component tree*/}
root.render(
  <Provider store={store}>                 
    <App />                                
  </Provider>
);
