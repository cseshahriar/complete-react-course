import {forwardRef, useRef, useEffect} from "react";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
            <Host/>
      </header>
    </div>
  );
}

function Host() {
    const inpRef = useRef(null);

    useEffect(() => {
        inpRef.current.focus();
    }, []);

    return (
        <MyInput type="text" ref={inpRef}>Hello World</MyInput>
    );
};

const MyInput = forwardRef((props, ref) => {
    return(
        <>
            <input ref={ref} />
            {props.children}
        </>
    );
});

// useRef use for next/prev form
// previous form data keep