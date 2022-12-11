import {useState} from "react";
import { Routes, Route } from "react-router-dom"

import './App.css';

import HomeComponent from "./components/home.component";
import LoginComponent from "./components/login.component";
import RegisterComponent from "./components/register.component";
import NavComponent from "./components/nav.component";

const App = () => {
  return (
    <div className="App">
        <NavComponent/>
        <Routes>
            {/* path */}
            <Route path='/' element={<HomeComponent />}/>
            <Route path='/login' element={<LoginComponent />}/>
            <Route path='/register' element={<RegisterComponent />}/>
        </Routes>
    </div>
  );
}

export default App;
