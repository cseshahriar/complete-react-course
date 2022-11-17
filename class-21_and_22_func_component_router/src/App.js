import React from 'react';
import { Routes, Route,} from "react-router-dom";

import Dashboard from './components/dashboard/dashboard.component';
import AppNavbar from './components/navbar/navbar.component';
import Home from './components/home/home.component';
import PageNotFound from './components/message/pagenotfound.component';
import UserProfile from './components/userprofile.component';

import './App.css';

// pure function
const App = () => { 
  
  return (
    <div className="App">
      <AppNavbar/>
      <Routes>
        {/* path */}
        <Route path='/home' element={<Home/>}/>
        <Route path='/users' element={<Dashboard/>}/>
        <Route path='/users/:id' element={<UserProfile/>}/>
        <Route path='/*' element={<PageNotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
