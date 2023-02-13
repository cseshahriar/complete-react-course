import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { QueryClientProvider, QueryClient } from "react-query";
import preset from "@rebass/preset";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={preset}>
              <BrowserRouter>
                  <App />
              </BrowserRouter>
          </ThemeProvider>
      </QueryClientProvider>
  </React.StrictMode>
);

