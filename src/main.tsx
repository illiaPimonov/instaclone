import React from 'react-dom';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './globals.css';
ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
<App/>
</BrowserRouter>
);