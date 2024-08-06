import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes/Route';
import store from './redux/store'; // Ensure this path is correct
import './custom.css';

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  );
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
