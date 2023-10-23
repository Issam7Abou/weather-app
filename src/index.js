import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.scss';
import App from './App';

import reportWebVitals from './reportWebVitals';

import { DataProvider } from './DataContext/DataContext';
import { ButtonProvider } from './DataContext/ButtonContext';
import { SubmittedProvider } from './DataContext/SubmittedContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ButtonProvider>
      <SubmittedProvider>
        <DataProvider>
          <App />
        </DataProvider>
      </SubmittedProvider>
    </ButtonProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
