export default function ClickCounter({count, incrementCount}) {
    return (
        <div style={{padding:'15px'}}>
            <button type="button" onClick={incrementCount}>Clicked {count} times</button>
        </div>
    );
}