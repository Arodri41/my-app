import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "./Components/navbar.css";
import "./pages/inicio";
import "./pages/productos";
import "./pages/nosotros";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-browser-dom"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);


