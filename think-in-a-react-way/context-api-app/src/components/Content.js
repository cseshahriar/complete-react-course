import HoverCounter from "./HoverCounter";
import Counter from "./Counter";
import ThemeContext from "../contexts/themeContext";

export default function Content() {
    return (
        <div>
            <h1>This is a content</h1>
            <Counter>
                {(count, incrementCount) => (
                   <ThemeContext.Consumer>
                        { ({theme, switchTheme}) => (
                            <HoverCounter
                                theme={{'theme': theme}}
                                count={count}
                                incrementCount={incrementCount}
                                switchTheme={switchTheme}
                            />
                        )}
                    </ThemeContext.Consumer>
                )}
            </Counter>
        </div>
    );
}