import React from 'react';
import ReactDOM from 'react-dom/client';

import {Routes, Route, BrowserRouter} from "react-router-dom";
import  {CookiesProvider} from 'react-cookie';

import LoginComponent from "./components/Login.component";

import './index.css';
// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import  'bootstrap/dist/js/bootstrap.bundle.min.js';

import App from './App';

function Router() {
    return(
        <Routes>
            <Route exact path="/login" element={<LoginComponent/>}/>
            <Route exact path= "/" element={<App/>}/>
        </Routes>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <CookiesProvider>
          <BrowserRouter>
              <Router/>
          </BrowserRouter>
      </CookiesProvider>
  </React.StrictMode>
);
