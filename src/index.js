import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import './index.css';
import { PersistGate } from 'redux-persist/lib/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
     <PersistGate loading={null} persistor={persistor}>
        <React.StrictMode>
    <App />
  </React.StrictMode>
      </PersistGate>

  </Provider>
  
  
);
