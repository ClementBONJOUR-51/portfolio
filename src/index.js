import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom"
import { BrowserRouter } from "react-router-dom";

import Main from './screens/Main';
import Resume from './screens/Resume';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // basename='/portfolio'
  <BrowserRouter basename='/portfolio'>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/resume" element={<Resume />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

