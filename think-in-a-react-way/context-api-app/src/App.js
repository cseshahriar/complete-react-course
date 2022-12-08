import {Component} from "react";
import Section from "./components/Section";
import ThemeContext from "./contexts/themeContext";
import './App.css';

export default class App extends Component {
    state = {
        theme: 'dark',
        switchTheme: () => {
            this.setState(({theme}) => {
                if(theme === 'dark') {
                    return {
                        theme: 'light'
                    }
                } else {
                    return {
                        theme: 'dark'
                    }
                }
            })
        },
    }


    render() {
        return (
            <div className="App">
                <ThemeContext.Provider value={this.state}>
                    <Section/>
                </ThemeContext.Provider>
            </div>
        );
    }
}