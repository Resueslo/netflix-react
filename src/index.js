import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//VISTAS

import Error from './views/Error';
import Detalle from './views/Detalle/Detalle';
import Genres from './views/Genres/Genres';
import Home from './views/Home.js'
import Actor from './views/Actor';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/detalle/:id/:type" component={Detalle} element={<Detalle />}/>
        <Route path="/actor/:id" component={Actor} element={<Actor />}/>
        <Route path="*" element={<Error />}/>
        <Route path="/genre/:name/:id" component={Genres} element={<Genres/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
