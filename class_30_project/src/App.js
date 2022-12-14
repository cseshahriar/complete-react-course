import React from "react";
import './App.css';

import NavBarComponent from "./components/nav.component";
import FooterComponent from "./components/footer.component";
import SliderComponent from "./components/slider.component";
import LatestProductsComponents from "./components/latest-products.components";

export default function App() {
  return (
    <div className="App">
        <NavBarComponent/>
        <SliderComponent/>

        <LatestProductsComponents/>

        <FooterComponent/>
    </div>
  );
}