export default function HoverCounter({count, incrementCount, theme}) {
    const style = theme == 'dark' ? {backgroundColor: '#000000', color: '#ffffff', padding: '15px'} : null;

    return (
        <div style={{padding:'15px'}}>
            <h1 type="button" onMouseOver={incrementCount} style={style}>Hovered {count} times</h1>
        </div>
    );
}