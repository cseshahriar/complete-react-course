import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import NavBarComponent from "./components/NavbarComponent";
function App() {
  return (
      <BrowserRouter>
          <NavBarComponent/>

          <Routes>
              <Route path="" element={<Home/>} />
              <Route path="/about" element={<About/>} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
