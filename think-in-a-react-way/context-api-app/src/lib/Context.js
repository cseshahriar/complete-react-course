import Counter from "../components/Counter";
import HoverCounter from "../components/HoverCounter";
import ThemeContext from "../contexts/themeContext";

class Context {
    constructor(value) {
        this.value = value;
    }

    // provider
    Provider = ({children, value}) => {
        this.value = value;
        return children;
    };

    // consumer
    Consumer = ({ children }) => children(this.value);
}

function createContext(value = null) {
    const context = new Context(value); // create context obj
    return {
        Provider: context.Provider,
        Consumer: context.Consumer,
    }
}
export  default createContext;