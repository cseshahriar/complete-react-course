import {Component} from "react";
import ClickCounter from "./components/ClickCounter";
import Counter from "./components/Counter";
import Section from "./components/Section";
import themeContext from "./contexts/themeContext";
import './App.css';

import createContext from "./lib/Context";


export default class App extends Component {
    state = {
        theme: 'dark'
    }

    render() {
        const {theme} = this.state;

        return (
            <div className="App">
                <themeContext.Provider value={{ theme }}>
                    <Section/>
                </themeContext.Provider>
            </div>
        );
    }
}