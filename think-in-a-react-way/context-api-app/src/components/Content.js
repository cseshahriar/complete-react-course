import HoverCounter from "./HoverCounter";
import Counter from "./Counter";

export default function Content({theme}) {
    return (
        <div>
            <h1>This is a content</h1>
            <Counter>
                {(count, incrementCount) => (
                    <HoverCounter count={count} incrementCount={incrementCount} theme={theme} />
                )}
            </Counter>
        </div>
    );
}