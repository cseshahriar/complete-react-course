import React from 'react';
import { Routes, Route,} from "react-router-dom";

import Dashboard from './components/dashboard/dashboard.component';
import AppNavbar from './components/navbar/navbar.component';
import Home from './components/home/home.component';
import PageNotFound from './components/message/pagenotfound.component';
import UserProfile from './components/userprofile.component';

import PrivateRoute from './core/compoents/privateRoute.component';
import PrivateOutlet from './core/compoents/privateOutlet.component';

import Login from './components/Auth/login.component';
import Signup from './components/Auth/registration.component';

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
        
        {/* private route */}
        <Route path='/users/:id' element={
          <PrivateRoute>
            <UserProfile/>
          </PrivateRoute>
        }/>

        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>

        {/* group route */}
        <Route path='users/*' element={PrivateOutlet}>
          <Route path='detail/:id' element={<UserProfile/>}/>
        </Route>

        {/* 404 page */}
        <Route path='/*' element={<PageNotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
