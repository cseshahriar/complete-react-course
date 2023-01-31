import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import client from "./react-query-client";

// react query
import { QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from "react-query/devtools";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <QueryClientProvider client={client}>
        <App/>
        <ReactQueryDevtools/>
    </QueryClientProvider>
);
