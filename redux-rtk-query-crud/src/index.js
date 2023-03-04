import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';
import Post from "./Post";
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux'
import {store} from "./store";

import {BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/posts/:post_id" element={<Post />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);

reportWebVitals();
