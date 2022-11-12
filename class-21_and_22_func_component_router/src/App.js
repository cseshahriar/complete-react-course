import React from 'react';
import './App.css';
import Dashboard from './components/dashboard/dashboard.component';
import AppNavbar from './components/navbar/navbar.component';

// pure function
const App = () => {
  
  return (
    <div className="App">
      <AppNavbar/>
      <Dashboard/>
    </div>
  );
}

export default App;
