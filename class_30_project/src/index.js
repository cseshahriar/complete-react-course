import React from 'react';
import ReactDOM from 'react-dom/client';

import {Routes, Route, BrowserRouter} from "react-router-dom";
import  {CookiesProvider} from 'react-cookie';

import './index.css';

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import  'bootstrap/dist/js/bootstrap.bundle.min.js';
import App from './App';

import LoginComponent from "./components/Login.component";
import RegisterComponent from "./components/register.component";
import PageNotFoundComponent from "./components/page-not-found.component";
import ProductDetailComponent from "./components/product-detail.component";
// routes
function Router() {
    return(
        <Routes>
            <Route exact path= "/" element={<App/>}/>
            <Route exact path="/login" element={<LoginComponent/>}/>
            <Route exact path="/register" element={<RegisterComponent/> } />
            <Route exact path="/products/details/:id" element={<ProductDetailComponent/> } />
            <Route exact path= "/*" element={<PageNotFoundComponent/>} />
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
