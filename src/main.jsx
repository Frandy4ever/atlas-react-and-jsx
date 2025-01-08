import { React,  StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css";

// Render the App component to the root element
ReactDOM.createRoot(document.getElementById('root')).render(
   <StrictMode>
      <App />
   </StrictMode>
);
