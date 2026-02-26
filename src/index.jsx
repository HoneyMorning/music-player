import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 'bootstrap/dist/css/bootstrap.min.css';
import rootReducer from './reducers';
import App from './App';

const store = configureStore({ reducer: rootReducer });

createRoot(document.getElementById('app')).render(
  <Provider store={store}>
    <App />
  </Provider>,
);
