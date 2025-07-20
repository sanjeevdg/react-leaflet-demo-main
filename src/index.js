import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppVector from './AppVector';
import AppRaster from './AppRaster';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const useVectorTiles = true;

if (useVectorTiles) {
  root.render(
    <React.StrictMode>
      <AppVector />
    </React.StrictMode>
  );
} else {
  root.render(
    <React.StrictMode>
      <AppRaster />
    </React.StrictMode>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
