import {Component} from "react";
import Section from "./components/Section";
import './App.css';

export default class App extends Component {
    state = {
        theme: 'dark'
    }
    incrementCount() {

    }

    render() {
        const {theme} = this.state;

        return (
            <div className="App">
                <Section theme={theme} />
            </div>
        );
    }
}