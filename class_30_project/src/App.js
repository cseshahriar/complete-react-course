import React from "react";
import './App.css';

import NavBarComponent from "./components/nav.component";
import FooterComponent from "./components/footer.component";
export default function App() {
  return (
    <div className="App">
        <NavBarComponent/>
        <FooterComponent/>
    </div>
  );
}